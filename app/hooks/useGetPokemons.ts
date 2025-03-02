import { useState, useEffect } from 'react';
import api from '../lib/axios';
import { PokemonListResponse } from '../types/pokemon';

export const useGetPokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonList = async (search: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get<PokemonListResponse>('/', {
        params: {
          search: search,
        },
      });

      return response.data.data;
    } catch (err) {
      setError('Failed to fetch Pokemon list');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    fetchPokemonList,
  };
};
