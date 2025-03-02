'use client';

import React, { useEffect, Dispatch, SetStateAction } from 'react';
import useGetRandomPokemonEvery24Hours from '../../hooks/useGetRandomPokemon';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface DailyPokemonProps {
  setColor: Dispatch<SetStateAction<string>>;
}

const DailyPokemon = ({ setColor }: DailyPokemonProps) => {
  const { fetchRandomPokemon, randomPokemon, isLoading, error } = useGetRandomPokemonEvery24Hours();
  const hasFetchedRef = React.useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (hasFetchedRef.current) return;

    hasFetchedRef.current = true;
    fetchRandomPokemon();
  }, [fetchRandomPokemon]);

  useEffect(() => {
    setColor(randomPokemon?.color || 'green');
  }, [randomPokemon]);

  if (isLoading) {
    return <div className="p-6 bg-white rounded-xl shadow-md">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 bg-white rounded-xl shadow-md text-red-500">Error: {error}</div>;
  }

  if (!randomPokemon) {
    return <div className="p-6 bg-white rounded-xl shadow-md">No random pokemon found</div>;
  }

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 max-w-sm mx-auto z-10 mt-20 cursor-pointer"
      onClick={() => router.push(`/pokemon/${randomPokemon?.id}`)}
    >
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 relative bg-gradient-to-b from-gray-100 to-white rounded-full p-4">
          <Image
            src={randomPokemon?.image_url}
            alt={randomPokemon?.name}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">{randomPokemon?.name}</h2>
          <p className="text-sm text-gray-500 mt-2 bg-gray-100 px-3 py-1 rounded-full inline-block">
            #{randomPokemon?.id.toString().padStart(3, '0')}
          </p>
          <p className="text-gray-600 mt-3">Today's Featured Pokémon</p>
        </div>
      </div>
    </div>
  );
};

export default DailyPokemon;
