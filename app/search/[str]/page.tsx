'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PokemonListItem } from '../../types/pokemon';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { toPastel } from '../../utils/to-pastel';
import Image from 'next/image';

const PokemonSearch = () => {
  const { str } = useParams();

  const [suggestions, setSuggestions] = useState<PokemonListItem[]>([]);

  const { fetchPokemonList, isLoading, error } = useGetPokemons();

  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (str && str.length > 0) {
        const response = await fetchPokemonList(str as string);
        if (response) {
          setSuggestions(response);
        }
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [str]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen h-full w-full bg-green-300">
      <h1 className="text-4xl font-bold mt-8 mb-6 text-gray-800">Search Results</h1>
      <div className="w-full max-w-4xl px-4">
        {suggestions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {suggestions.map((suggestion, index) => (
              <div
                key={suggestion.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-1 animate-fade-in-up"
                onClick={() => router.push(`/pokemon/${suggestion.id}`)}
              >
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 relative bg-gradient-to-b from-gray-100 to-white rounded-full p-4">
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${suggestion.id}.png`}
                      alt={suggestion.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 capitalize">
                      {suggestion.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 bg-gray-100 px-2 py-1 rounded-full inline-block">
                      #{suggestion.id.toString().padStart(3, '0')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg animate-fade-in">
            No results found for "{str}"
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonSearch;
