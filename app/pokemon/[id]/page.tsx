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
  if (!pokemon) return <div></div>;

  return (
    <div className="h-full min-h-screen lg:h-screen w-full bg-gray-200">
      <div className="relative lg:absolute top-0 left-0 h-56 w-full md:h-full md:w-[35%] flex items-center justify-center">
        <BackButton />
        <PokemonImage pokemon={pokemon} />
      </div>
      <div
        className="relative lg:absolute bottom-0 lg:top-0 lg:-bottom-full right-0 h-3/5 w-full md:h-full md:w-[65%] clip-path-polygon"
        style={{
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
