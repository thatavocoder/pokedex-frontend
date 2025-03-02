import { Pokemon } from '../../../types/pokemon';

interface PokemonHeaderProps {
  pokemon: Pokemon;
}

export const PokemonHeader = ({ pokemon }: PokemonHeaderProps) => {
  return (
    <div className="py-8 pt-16">
      <div className="flex justify-end items-center gap-4 text-white bg-gray-700 px-8 py-4">
        <span>No. {pokemon.id.toString().padStart(3, '0')}</span>
        <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
      </div>
    </div>
  );
};
