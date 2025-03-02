import { Pokemon } from '../../../types/pokemon';

interface PokemonStatsProps {
  pokemon: Pokemon;
}

export const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  return (
    <div className="flex flex-col justify-end items-end gap-6 text-black">
      <div className="flex flex-col items-end">
        <span className="text-base uppercase tracking-wider opacity-60 font-light">Height</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{pokemon?.height}</span>
          <span className="text-lg opacity-70">ft</span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-base uppercase tracking-wider opacity-60 font-light">Weight</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{pokemon?.weight}</span>
          <span className="text-lg opacity-70">kg</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="text-base uppercase tracking-wider opacity-60 font-light">Abilities</span>
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
        <span className="text-base uppercase tracking-wider opacity-60 font-light">Types</span>
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
  );
};
