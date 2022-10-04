// Interfaces derrived from data using https://jvilk.com/MakeTypes/
export interface PokemonDetails {
  abilities?: AbilitiesEntity[] | null;
  base_experience: number;
  forms?: NameAndUrl[] | null;
  game_indices?: GameIndicesEntity[] | null;
  height: number;
  held_items?: HeldItemsEntity[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: MovesEntity[] | null;
  name: string;
  order: number;
  past_types?: null[] | null;
  species: NameAndUrl;
  sprites: Sprites;
  stats?: StatsEntity[] | null;
  types?: TypesEntity[] | null;
  weight: number;
}

export interface AbilitiesEntity {
  ability: NameAndUrl;
  is_hidden: boolean;
  slot: number;
}

export interface NameAndUrl {
  name: string;
  url: string;
}

export interface GameIndicesEntity {
  game_index: number;
  version: NameAndUrl;
}

export interface HeldItemsEntity {
  item: NameAndUrl;
  version_details?: VersionDetailsEntity[] | null;
}

export interface VersionDetailsEntity {
  rarity: number;
  version: NameAndUrl;
}

export interface MovesEntity {
  move: NameAndUrl;
  version_group_details?: VersionGroupDetailsEntity[] | null;
}

export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: NameAndUrl;
  version_group: NameAndUrl;
}

export interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other?: { [key: string]: Sprites };
  versions?: { [key: string]: Versions };
}

export interface Versions {
  [key: string]: Sprites;
}

export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: NameAndUrl;
}
export interface TypesEntity {
  slot: number;
  type: NameAndUrl;
}

export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: NameAndUrl;
  egg_groups?: NameAndUrl[] | null;
  evolution_chain: EvolutionChain;
  evolves_from_species: NameAndUrl;
  flavor_text_entries?: FlavorTextEntriesEntity[] | null;
  form_descriptions?: null[] | null;
  forms_switchable: boolean;
  gender_rate: number;
  genera?: GeneraEntity[] | null;
  generation: NameAndUrl;
  growth_rate: NameAndUrl;
  habitat: NameAndUrl;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names?: NamesEntity[] | null;
  order: number;
  pal_park_encounters?: PalParkEncountersEntity[] | null;
  pokedex_numbers?: PokedexNumbersEntity[] | null;
  shape: NameAndUrl;
  varieties?: VarietiesEntity[] | null;
}

export interface EvolutionChain {
  url: string;
}
export interface FlavorTextEntriesEntity {
  flavor_text: string;
  language: NameAndUrl;
  version: NameAndUrl;
}

export interface GeneraEntity {
  genus: string;
  language: NameAndUrl;
}

export interface NamesEntity {
  language: NameAndUrl;
  name: string;
}

export interface PalParkEncountersEntity {
  area: NameAndUrl;
  base_score: number;
  rate: number;
}

export interface PokedexNumbersEntity {
  entry_number: number;
  pokedex: NameAndUrl;
}

export interface VarietiesEntity {
  is_default: boolean;
  pokemon: NameAndUrl;
}

export interface PokemonType {
  damage_relations: DamageRelations;
  game_indices?: GameIndicesEntity[] | null;
  generation: NameAndUrl;
  id: number;
  move_damage_class: NameAndUrl;
  moves?: NameAndUrl[] | null;
  name: string;
  names?: NamesEntity[] | null;
  past_damage_relations?: PastDamageRelationsEntity[] | null;
  pokemon?: PokemonEntity[] | null;
}
export interface DamageRelations {
  double_damage_from?: NameAndUrl[] | null;
  double_damage_to?: NameAndUrl[] | null;
  half_damage_from?: NameAndUrl[] | null;
  half_damage_to?: NameAndUrl[] | null;
  no_damage_from?: null[] | null;
  no_damage_to?: null[] | null;
}

export interface GameIndicesEntity {
  game_index: number;
  generation: NameAndUrl;
}
export interface NamesEntity {
  language: NameAndUrl;
  name: string;
}
export interface PastDamageRelationsEntity {
  damage_relations: DamageRelations;
  generation: NameAndUrl;
}
export interface PokemonEntity {
  pokemon: NameAndUrl;
  slot: number;
}

export interface PokemonEvolutionChain {
  baby_trigger_item?: null;
  chain: Chain;
  id: number;
}
export interface Chain {
  evolution_details?: null[] | null;
  evolves_to?: EvolvesToEntity[] | null;
  is_baby: boolean;
  species: NameAndUrl;
}
export interface EvolvesToEntity {
  evolution_details?: EvolutionDetailsEntity[] | null;
  evolves_to?: EvolvesToEntity[] | null;
  is_baby: boolean;
  species: NameAndUrl;
}
export interface EvolutionDetailsEntity {
  gender?: null;
  held_item?: null;
  item?: null;
  known_move?: null;
  known_move_type?: null;
  location?: null;
  min_affection?: null;
  min_beauty?: null;
  min_happiness?: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species?: null;
  party_type?: null;
  relative_physical_stats?: null;
  time_of_day: string;
  trade_species?: null;
  trigger: NameAndUrl;
  turn_upside_down: boolean;
}
