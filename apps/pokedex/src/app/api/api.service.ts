import { IPokemonDetails, IPokemonId } from './api.types';

const API_ROOT = 'https://pokeapi.co/api/v2';

/**
 * Returns the ID number for a Pokemon from the passed URL.
 * The ID is the last number in the URL. For example, 1 in "https://pokeapi.co/api/v2/pokemon/1/"
 * Returns 0 if it can't be determined
 */
const getIdFromUrl = (url: string): number => {
  if (!url) {
    return 0;
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
      details.results.map((result: { name: string; url: string }) => ({
        name: result.name,
        id: getIdFromUrl(result.url),
      }))
    );
};

/**
 * Get the details for the requested Pokemon
 * @returns list of IPokemonIds
 */
export const fetchPokemon = (
  nameOrId: string | number
): Promise<IPokemonDetails> => {
  // Note: For now, get up to the first 2000 pokemon. In the future, support fetching additional pages
  return fetch(`${API_ROOT}/pokemon/${nameOrId}`)
    .then((response) => response.json())
    .then((details) =>
      details.results.map((result: { name: string; url: string }) => ({
        name: result.name,
        id: getIdFromUrl(result.url),
      }))
    );
};
