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
 * A Stat for a Pokemon
 */
export interface IStat {
  name: string;
  value: number;
}

export interface IVariety {
  name: string;
  isDefault: boolean;
}

export interface IWeakness {
  doubleDamage: string[];
  halfDamage: string[];
  totalWeakness?: string[];
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
  heroImage: string;
  abilities: IAbility[];
  type: string[];
  weaknesses: string[];
  moves: string[];
  varieties: IVariety[];
  stats: IStat[];
  flavorText: string;
  evolutions: string[];
}
