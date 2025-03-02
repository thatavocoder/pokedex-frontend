import Image from 'next/image';
import { Pokemon } from '../../../types/pokemon';

interface PokemonImageProps {
  pokemon: Pokemon;
}

export const PokemonImage = ({ pokemon }: PokemonImageProps) => {
  return (
    <Image
      src={pokemon.image_url}
      alt={pokemon.name}
      width={800}
      height={800}
      className="w-60 h-auto"
      unoptimized
    />
  );
};
