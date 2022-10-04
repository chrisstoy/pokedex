import { IPokemonDetails, IPokemonId, IWeakness } from './api.types';
import * as PokeAPI from './pokemon_api.types';

const API_ROOT = 'https://pokeapi.co/api/v2';

/**
 * Returns the ID number for a Pokemon from the passed URL.
 * The ID is the last number in the URL. For example, 1 in "https://pokeapi.co/api/v2/pokemon/1/"
 * @returns the ID extracted from the URL, or -1 if not found
 */
const getIdFromUrl = (url: string): number => {
  if (!url) {
    return -1;
  }

  const parts = url.split('/');
  const value = parts[parts.length - 2];
  return +value;
};

/**
 * Get list of all Pokemon names and Ids
 * @returns list of IPokemonIds
 */
export const fetchAllPokemon = (): Promise<IPokemonId[]> => {
  // Note: For now, get up to the first 2000 pokemon. In the future, support fetching additional pages
  return fetch(`${API_ROOT}/pokemon?limit=2000`)
    .then((response) => response.json())
    .then((details) =>
      details.results.map(
        (result: { name: string; url: string }) =>
          ({
            name: result.name,
            id: getIdFromUrl(result.url),
          } as IPokemonId)
      )
    );
};

/**
 * Gather all weaknesses for the specified Pokemon types
 * @returns list of weaknesses for the passed types
 */
export const fetchWeaknessesForTypes = async (
  types: string[]
): Promise<IWeakness> => {
  const results = await Promise.all(
    types.map(async (type) => {
      const typeResponse = await fetch(`${API_ROOT}/type/${type}`);
      const typeBody = (await typeResponse.json()) as PokeAPI.PokemonType;

      const weakness = {
        doubleDamage:
          typeBody.damage_relations.double_damage_from?.map(
            (damage) => damage.name
          ) ?? [],
        halfDamage:
          typeBody.damage_relations.half_damage_from?.map(
            (damage) => damage.name
          ) ?? [],
      };
      return weakness;
    })
  );

  const unique = (value: string, index: number, self: string[]): boolean =>
    self.indexOf(value) === index;

  const weakness = {
    doubleDamage: results
      .map((value) => value.doubleDamage)
      .flat()
      .filter(unique),
    halfDamage: results
      .map((value) => value.halfDamage)
      .flat()
      .filter(unique),
  } as IWeakness;

  // total weakness is when the Pokemon receives double damage and has no half-damange modifier for the same attack type
  weakness.totalWeakness = weakness.doubleDamage.filter(
    (name) => !weakness.halfDamage.includes(name)
  );

  return weakness;
};

/**
 * Returns the evolution chain requested
 * @param chainId ID of the evolution chain to follow
 * @returns ordered list of evolutions
 */
export const fetchEvolutions = async (chainId: number): Promise<string[]> => {
  const evoResponse = await fetch(`${API_ROOT}/evolution-chain/${chainId}`);
  const evoBody = (await evoResponse.json()) as PokeAPI.PokemonEvolutionChain;

  const extractSpecies = (
    chain: PokeAPI.Chain | PokeAPI.EvolvesToEntity[] | undefined | null
  ): string[] => {
    if (!chain) {
      return [];
    }

    if (Array.isArray(chain)) {
      const evos = chain.map((evo) =>
        [evo.species.name].concat(extractSpecies(evo.evolves_to))
      );
      return evos.flat();
    } else {
      return [chain.species.name].concat(extractSpecies(chain.evolves_to));
    }
  };

  return extractSpecies(evoBody.chain);
};

/**
 * Get the details for the requested Pokemon
 * @param nameOrId the name or the ID of the Pokemon
 * @returns details for the requested Pokemon
 */
export const fetchPokemonDetails = async (
  nameOrId: string | number
): Promise<IPokemonDetails> => {
  const detailsResponse = await fetch(`${API_ROOT}/pokemon/${nameOrId}`);
  const detailsBody = (await detailsResponse.json()) as PokeAPI.PokemonDetails;

  const speciesResponse = await fetch(
    `${API_ROOT}/pokemon-species/${nameOrId}`
  );
  const speciesBody = (await speciesResponse.json()) as PokeAPI.PokemonSpecies;

  const chainId = getIdFromUrl(speciesBody.evolution_chain.url);
  const evolutions = await fetchEvolutions(chainId);

  const flavorText =
    speciesBody.flavor_text_entries?.find(
      (entry) => entry.language.name === 'en'
    )?.flavor_text ?? 'This Pokemon is an inigma.';

  // fetch all the weaknesses for this Pokemon, based on its types
  const type = detailsBody.types?.map((type) => type.type.name) ?? [];
  const weakness = await fetchWeaknessesForTypes(type);

  // convert the details to the type we need
  const details: IPokemonDetails = {
    id: detailsBody.id,
    name: detailsBody.name,
    height: detailsBody.height,
    weight: detailsBody.weight,
    heroImage: detailsBody.sprites.front_default,
    abilities:
      detailsBody.abilities?.map((ability) => ({
        name: ability.ability.name,
        is_hidden: ability.is_hidden,
      })) ?? [],
    stats:
      detailsBody.stats?.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })) ?? [],
    type,
    weaknesses: weakness.totalWeakness || [],
    moves: detailsBody.moves?.map((move) => move.move.name) ?? [],
    varieties:
      speciesBody.varieties?.map((variety) => ({
        name: variety.pokemon.name,
        isDefault: variety.is_default,
      })) ?? [],
    flavorText,
    evolutions,
  };
  return details;
};
