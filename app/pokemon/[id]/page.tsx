'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { useGetPokemonById } from '../../hooks/useGetPokemonById';
import { toPastel } from '../../utils/to-pastel';
import { BackButton } from './components/BackButton';
import { PokemonImage } from './components/PokemonImage';
import { PokemonHeader } from './components/PokemonHeader';
import { PokemonStats } from './components/PokemonStats';

const PokemonDetails = () => {
  const { id } = useParams();
  const { pokemon, isLoading, error } = useGetPokemonById(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pokemon) return <div>Pokemon not found</div>;

  return (
    <div className="relative h-screen w-full bg-gray-200">
      <div className="absolute top-0 left-0 h-full w-[35%] flex items-center justify-center">
        <BackButton />
        <PokemonImage pokemon={pokemon} />
      </div>
      <div
        className="absolute top-0 right-0 h-full w-[65%]"
        style={{
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
          backgroundColor: toPastel(pokemon.color),
        }}
      >
        <PokemonHeader pokemon={pokemon} />
        <div className="px-10 py-6">
          <PokemonStats pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
