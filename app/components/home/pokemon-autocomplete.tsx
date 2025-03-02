'use client';

import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

type Props = {};

const PokemonAutocomplete = (props: Props) => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const pokemonList = [
    'Bulbasaur',
    'Charmander',
    'Squirtle',
    'Pikachu',
    'Charizard',
    'Mewtwo',
    'Mew',
    'Gyarados',
  ];

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.length > 0) {
      const filteredSuggestions = pokemonList.filter(pokemon =>
        pokemon.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="mt-16 w-1/2 relative flex items-center">
      <input
        type="text"
        value={search}
        onChange={e => handleSearch(e.target.value)}
        placeholder="What do you want to catch?"
        className="w-full p-4 pl-16 rounded-full bg-white z-20 
          border-4 border-black shadow-lg
          placeholder:text-gray-500 text-lg
          focus:outline-none focus:ring-4 focus:ring-red-500
          transition-all duration-300"
      />
      <BiSearch className="absolute left-8 w-5 h-5 text-gray-500 z-30" />

      {suggestions.length > 0 && (
        <ul
          className="absolute w-full top-full mt-2 bg-white border-2 
          border-black rounded-lg shadow-lg z-30 max-h-60 overflow-y-auto"
        >
          {suggestions.map((pokemon, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-red-100 cursor-pointer
                transition-colors duration-150"
              onClick={() => {
                setSearch(pokemon);
                setSuggestions([]);
              }}
            >
              {pokemon}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonAutocomplete;
