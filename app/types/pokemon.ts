export interface PokemonListItem {
  id: number;
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  data: PokemonListItem[];
}

export interface Pokemon {
  id: number;
  name: string;
  image_url: string;
  color: string;
  height: number;
  weight: number;
  abilities: string[];
  types: string[];
  base_experience: number;
}
