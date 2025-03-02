export interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
}
