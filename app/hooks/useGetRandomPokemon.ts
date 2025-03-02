import { useState, useCallback } from 'react';
import api from '../lib/axios';
import { Pokemon } from '../types/pokemon';
import { Response } from '../types/response';

interface CachedPokemon {
  pokemon: Pokemon;
  timestamp: number;
}

export const useGetRandomPokemonEvery24Hours = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

  const fetchRandomPokemon = useCallback(async () => {
    try {
      const cached = localStorage.getItem('dailyPokemon');
      if (cached) {
        const { pokemon, timestamp }: CachedPokemon = JSON.parse(cached);
        const now = Date.now();
        const hoursPassed = (now - timestamp) / (1000 * 60 * 60);

        if (hoursPassed < 24) {
          setRandomPokemon(pokemon);
          return;
        }
      }

      setIsLoading(true);
      setError(null);
      const response = await api.get<Response<Pokemon>>('/random');
      const newPokemon = response.data.data;

      const cacheData: CachedPokemon = {
        pokemon: newPokemon,
        timestamp: Date.now(),
      };
      localStorage.setItem('dailyPokemon', JSON.stringify(cacheData));

      setRandomPokemon(newPokemon);
    } catch (err) {
      setError('Failed to fetch random pokemon');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    fetchRandomPokemon,
    randomPokemon,
  };
};

export default useGetRandomPokemonEvery24Hours;
