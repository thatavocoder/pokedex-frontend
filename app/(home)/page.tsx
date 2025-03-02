'use client';

import Image from 'next/image';
import HeroBg from './components/hero-bg';
import PokemonAutocomplete from './components/pokemon-autocomplete';
import DailyPokemon from './components/daily-pokemon';
import { useState } from 'react';
import { toPastel } from '../utils/to-pastel';

export default function Home() {
  const [color, setColor] = useState<string>('green');

  return (
    <div
      className="flex flex-col items-center min-h-screen h-full pb-8"
      style={{ backgroundColor: color ? toPastel(color) : toPastel('green') }}
    >
      <HeroBg />
      <Image
        src="/logo.png"
        alt="logo"
        width={350}
        height={350}
        className="mt-8 h-32 sm:h-42 w-auto z-10 max-w-[90%]"
        unoptimized
      />
      <PokemonAutocomplete />
      <DailyPokemon setColor={setColor} />
    </div>
  );
}
