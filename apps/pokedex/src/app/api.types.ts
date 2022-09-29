/**
 * Summary returned from Pokedex API
 */
export interface IPokedexSummary {
  abilities: string[];
  detailPageURL: string;
  weight: number;
  weakness: string[];
  number: string;
  height: number;
  collectibles_slug: string;
  featured: string;
  slug: string;
  name: string;
  ThumbnailAltText: string;
  ThumbnailImage: string;
  id: number;
  type: string[];
}
