/**
 * Identifier for a Pokemon
 */
export interface IPokemonId {
  id: number;
  name: string;
}

/**
 * A Pokemon ability
 */
export interface IAbility {
  name: string;
  is_hidden: boolean;
}

/**
 * Detail information about a Pokemon
 * This is a collection of all important information about a Pokemon gathered from
 * multiple locations
 */
export interface IPokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  thumbnailImage: string;
  thumbnailImageAlt: string;

  abilities: IAbility[];
  type: string[];
  weakness: string[];
  moves: string[];
  varieties: string[];
}
