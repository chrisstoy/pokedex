import * as apiModule from './api.service';
import fetchMock from 'jest-fetch-mock';

describe('ApiService', () => {
  fetchMock.enableMocks();

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockReject();
  });

  describe('fetchAllPolkemon', () => {
    it('should return list of Pokemons', async () => {
      const mockResponse = {
        count: 3,
        next: null,
        previous: null,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
          {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
          },
        ],
      };

      const expected = [
        {
          name: 'bulbasaur',
          id: 1,
        },
        {
          name: 'ivysaur',
          id: 2,
        },
        {
          name: 'venusaur',
          id: 3,
        },
      ];

      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const result = await apiModule.fetchAllPokemon();
      expect(result).toEqual(expected);
      expect(fetchMock.mock.calls.length).toEqual(1);
    });
  });

  describe('fetchWeaknessesForTypes', () => {
    const mockResponseGrass = {
      damage_relations: {
        double_damage_from: [
          {
            name: 'flying',
            url: 'https://pokeapi.co/api/v2/type/3/',
          },
          {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
          {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        ],
        half_damage_from: [
          {
            name: 'ground',
            url: 'https://pokeapi.co/api/v2/type/5/',
          },
          {
            name: 'water',
            url: 'https://pokeapi.co/api/v2/type/11/',
          },
        ],
      },
    };

    const mockResponseRock = {
      damage_relations: {
        double_damage_from: [
          {
            name: 'fighting',
            url: 'https://pokeapi.co/api/v2/type/2/',
          },
          {
            name: 'ground',
            url: 'https://pokeapi.co/api/v2/type/5/',
          },
          {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/9/',
          },
        ],
        half_damage_from: [
          {
            name: 'flying',
            url: 'https://pokeapi.co/api/v2/type/3/',
          },
        ],
      },
    };

    it('should return list of weakneses for the rquested types', async () => {
      fetchMock.mockResponse((req) => {
        if (req.url.endsWith('grass')) {
          return Promise.resolve(JSON.stringify(mockResponseGrass));
        } else if (req.url.endsWith('rock')) {
          return Promise.resolve(JSON.stringify(mockResponseRock));
        } else {
          return Promise.reject();
        }
      });

      const result = await apiModule.fetchWeaknessesForTypes(['grass', 'rock']);
      expect(result).toEqual({
        doubleDamage: ['flying', 'poison', 'grass', 'fighting', 'ground'],
        halfDamage: ['ground', 'water', 'flying'],
        totalWeakness: ['poison', 'grass', 'fighting'],
      });
      expect(fetchMock.mock.calls.length).toEqual(2);
    });

    it('should return no weaknesses if no types requested', async () => {
      fetchMock.mockResponse((req) =>
        Promise.resolve(JSON.stringify(mockResponseGrass))
      );

      const result = await apiModule.fetchWeaknessesForTypes([]);
      expect(result).toEqual({
        doubleDamage: [],
        halfDamage: [],
        totalWeakness: [],
      });

      expect(fetchMock.mock.calls.length).toEqual(0);
    });
  });

  describe('fetchEvolutions', () => {
    it('should return evolution list for the rquested Pokemon', async () => {
      const mockResponse = {
        chain: {
          evolves_to: [
            {
              evolves_to: [
                {
                  evolves_to: [],
                  species: {
                    name: 'blastoise',
                    url: 'https://pokeapi.co/api/v2/pokemon-species/9/',
                  },
                },
              ],
              species: {
                name: 'wartortle',
                url: 'https://pokeapi.co/api/v2/pokemon-species/8/',
              },
            },
          ],
          species: {
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
          },
        },
        id: 3,
      };

      fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

      const result = await apiModule.fetchEvolutions(3);
      expect(result).toEqual(['squirtle', 'wartortle', 'blastoise']);
      expect(fetchMock.mock.calls.length).toEqual(1);
    });
  });

  describe('fetchPokemonDetails', () => {
    const mockPokemon = {
      abilities: [
        {
          ability: {
            name: 'static',
            url: 'https://pokeapi.co/api/v2/ability/9/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'lightning-rod',
            url: 'https://pokeapi.co/api/v2/ability/31/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      base_experience: 41,
      height: 3,
      id: 172,
      is_default: true,
      location_area_encounters:
        'https://pokeapi.co/api/v2/pokemon/172/encounters',
      moves: [
        {
          move: {
            name: 'double-slap',
            url: 'https://pokeapi.co/api/v2/move/3/',
          },
        },
        {
          move: {
            name: 'mega-punch',
            url: 'https://pokeapi.co/api/v2/move/5/',
          },
        },
      ],
      name: 'pichu',
      order: 34,
      past_types: [],
      species: {
        name: 'pichu',
        url: 'https://pokeapi.co/api/v2/pokemon-species/172/',
      },
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/172.png',
        back_female: null,
        back_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/172.png',
        back_shiny_female: null,
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/172.png',
        front_shiny_female: null,
      },
      stats: [
        {
          base_stat: 20,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },
        {
          base_stat: 40,
          effort: 0,
          stat: {
            name: 'attack',
            url: 'https://pokeapi.co/api/v2/stat/2/',
          },
        },
        {
          base_stat: 15,
          effort: 0,
          stat: {
            name: 'defense',
            url: 'https://pokeapi.co/api/v2/stat/3/',
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/',
          },
        },
        {
          base_stat: 35,
          effort: 0,
          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/',
          },
        },
        {
          base_stat: 60,
          effort: 1,
          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/',
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: 'electric',
            url: 'https://pokeapi.co/api/v2/type/13/',
          },
        },
      ],
      weight: 20,
    };

    const mockSpecies = {
      base_happiness: 50,
      capture_rate: 190,
      evolution_chain: {
        url: 'https://pokeapi.co/api/v2/evolution-chain/10/',
      },
      evolves_from_species: null,
      flavor_text_entries: [
        {
          flavor_text:
            'It is not yet\nskilled at storing\nelectricity.\fIt may send out a\njolt if amused\nor startled.',
          language: {
            name: 'en',
            url: 'https://pokeapi.co/api/v2/language/9/',
          },
          version: {
            name: 'gold',
            url: 'https://pokeapi.co/api/v2/version/4/',
          },
        },
      ],
      has_gender_differences: false,
      hatch_counter: 10,
      id: 172,
      is_baby: true,
      is_legendary: false,
      is_mythical: false,
      name: 'pichu',
      order: 25,
      pal_park_encounters: [
        {
          area: {
            name: 'field',
            url: 'https://pokeapi.co/api/v2/pal-park-area/2/',
          },
          base_score: 80,
          rate: 10,
        },
      ],
      shape: {
        name: 'quadruped',
        url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
      },
      varieties: [
        {
          is_default: true,
          pokemon: {
            name: 'pichu',
            url: 'https://pokeapi.co/api/v2/pokemon/172/',
          },
        },
      ],
    };

    it('should return details for the requested Pokemon', async () => {
      jest
        .spyOn(apiModule, 'fetchEvolutions')
        .mockResolvedValue(Promise.resolve(['pichu', 'pikachu', 'raichu']));

      jest.spyOn(apiModule, 'fetchWeaknessesForTypes').mockResolvedValue(
        Promise.resolve({
          doubleDamage: ['ground'],
          halfDamage: ['flying', 'steel', 'electric'],
          totalWeakness: ['ground'],
        })
      );

      fetchMock.mockResponse((req) => {
        if (req.url.includes('/pokemon/')) {
          return Promise.resolve(JSON.stringify(mockPokemon));
        } else if (req.url.includes('/pokemon-species/')) {
          return Promise.resolve(JSON.stringify(mockSpecies));
        } else {
          return Promise.reject();
        }
      });

      const expected = {
        id: 172,
        name: 'pichu',
        height: 3,
        weight: 20,
        heroImage:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
        abilities: [
          {
            name: 'static',
            is_hidden: false,
          },
          {
            name: 'lightning-rod',
            is_hidden: true,
          },
        ],
        stats: [
          {
            name: 'hp',
            value: 20,
          },
          {
            name: 'attack',
            value: 40,
          },
          {
            name: 'defense',
            value: 15,
          },
          {
            name: 'special-attack',
            value: 35,
          },
          {
            name: 'special-defense',
            value: 35,
          },
          {
            name: 'speed',
            value: 60,
          },
        ],
        type: ['electric'],
        weaknesses: ['ground'],
        moves: ['double-slap', 'mega-punch'],
        varieties: [
          {
            name: 'pichu',
            isDefault: true,
          },
        ],
        flavorText:
          'It is not yet\nskilled at storing\nelectricity.\fIt may send out a\njolt if amused\nor startled.',
        evolutions: ['pichu', 'pikachu', 'raichu'],
      };

      const result = await apiModule.fetchPokemonDetails(
        'pichu',
        apiModule.fetchEvolutions,
        apiModule.fetchWeaknessesForTypes
      );
      expect(result).toStrictEqual(expected);
    });
  });
});
