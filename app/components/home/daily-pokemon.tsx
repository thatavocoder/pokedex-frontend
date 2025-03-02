'use client';

import React, { useEffect, Dispatch, SetStateAction } from 'react';
import useGetRandomPokemon from '../../hooks/useGetRandomPokemon';
import Image from 'next/image';

interface DailyPokemonProps {
  setColor: Dispatch<SetStateAction<string>>;
}

const DailyPokemon = ({ setColor }: DailyPokemonProps) => {
  const { fetchRandomPokemon, randomPokemon, isLoading, error } = useGetRandomPokemon();
  const hasFetchedRef = React.useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return;

    hasFetchedRef.current = true;
    fetchRandomPokemon();
  }, [fetchRandomPokemon]);

  useEffect(() => {
    setColor(randomPokemon?.color || 'green');
  }, [randomPokemon]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!randomPokemon) {
    return <div>No random pokemon found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={randomPokemon?.image_url}
        alt={randomPokemon?.name}
        width={100}
        height={100}
        className="w-auto h-48 z-10 mt-28"
        unoptimized
      />
    </div>
  );
};

export default DailyPokemon;
