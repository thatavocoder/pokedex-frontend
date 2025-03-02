'use client';

import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useGetPokemonById } from '../../hooks/useGetPokemonById';
import Image from 'next/image';
import { toPastel } from '../../utils/to-pastel';
import { BiArrowBack } from 'react-icons/bi';

const PokemonDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const { pokemon, isLoading, error } = useGetPokemonById(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative h-screen w-full bg-gray-200">
      <div className="absolute top-0 left-0 h-full w-[35%] flex items-center justify-center">
        <button
          className="absolute top-0 left-0 m-4 text-gray-700 px-4 py-2 rounded-md cursor-pointer"
          onClick={() => router.back()}
        >
          <BiArrowBack className="w-6 h-6" />
        </button>
        {pokemon?.image_url && (
          <Image
            src={pokemon.image_url}
            alt={pokemon.name}
            width={800}
            height={800}
            className="w-60 h-auto"
            unoptimized
          />
        )}
      </div>
      <div
        className="absolute top-0 right-0 h-full w-[65%]"
        style={{
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
          backgroundColor: toPastel(pokemon?.color || 'white'),
        }}
      >
        <div className="py-8 pt-16">
          <div className="flex justify-end items-center gap-4 text-white bg-gray-700 px-8 py-4">
            <span>No. {pokemon?.id.toString().padStart(3, '0')}</span>
            <h1 className="text-2xl font-bold capitalize">{pokemon?.name}</h1>
          </div>
        </div>
        <div className="px-10 py-6">
          <div className="flex flex-col justify-end items-end gap-6 text-black">
            <div className="flex flex-col items-end">
              <span className="text-base uppercase tracking-wider opacity-60 font-light">
                Height
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{pokemon?.height}</span>
                <span className="text-lg opacity-70">meters</span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-base uppercase tracking-wider opacity-60 font-light">
                Weight
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{pokemon?.weight}</span>
                <span className="text-lg opacity-70">kilos</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-base uppercase tracking-wider opacity-60 font-light">
                Abilities
              </span>
              <div className="flex gap-2 flex-wrap justify-end">
                {pokemon?.abilities.map(ability => (
                  <span
                    key={ability}
                    className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-base font-medium"
                  >
                    {ability.charAt(0).toUpperCase() + ability.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-base uppercase tracking-wider opacity-60 font-light">
                Types
              </span>
              <div className="flex gap-2 flex-wrap justify-end">
                {pokemon?.types.map(type => (
                  <span
                    key={type}
                    className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-base"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end mt-2">
              <span className="text-base uppercase tracking-wider opacity-60 font-light">
                Base Experience
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{pokemon?.base_experience}</span>
                <span className="text-lg opacity-70">XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
