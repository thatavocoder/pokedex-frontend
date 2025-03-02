import Image from 'next/image';
import HeroBg from './components/ui/hero-bg';
import PokemonAutocomplete from './components/home/pokemon-autocomplete';

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-green-300">
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
    </div>
  );
}
