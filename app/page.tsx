'use client';

import Image from 'next/image';
import HeroBg from './components/ui/hero-bg';
import PokemonAutocomplete from './components/home/pokemon-autocomplete';
import DailyPokemon from './components/home/daily-pokemon';
import { useState } from 'react';
import { toPastel } from './utils/to-pastel';

export default function Home() {
  const [color, setColor] = useState<string>('green');

  return (
    <div
      className="flex flex-col items-center h-screen"
      style={{ backgroundColor: color ? toPastel(color) : toPastel('green') }}
    >
      <HeroBg />
      <Image
        src="/logo.png"
        alt="logo"
        width={350}
        height={350}
        className="mt-8 h-42 w-auto z-10"
        unoptimized
      />
      <PokemonAutocomplete />
      <DailyPokemon setColor={setColor} />
    </div>
  );
}
