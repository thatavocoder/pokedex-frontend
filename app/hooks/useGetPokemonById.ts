import { useState, useEffect } from 'react';
import { Pokemon } from '../types/pokemon';
import api from '../lib/axios';
import { Response } from '../types/response';

export const useGetPokemonById = (id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonById = async () => {
      try {
        const response = await api.get<Response<Pokemon>>(`/${id}`);
        setPokemon(response.data.data);
      } catch (err) {
        setError('Failed to fetch Pokemon list');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonById();
  }, [id]);

  return {
    isLoading,
    error,
    pokemon,
  };
};
