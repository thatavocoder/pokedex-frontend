'use client';

import { BiSearch } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonListItem } from '../../types/pokemon';
import { useRouter } from 'next/navigation';

const PokemonAutocomplete = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<PokemonListItem[]>([]);

  const { fetchPokemonList, isLoading, error } = useGetPokemons();

  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (search.length > 0) {
        const response = await fetchPokemonList(search);
        if (response) {
          setSuggestions(response);
        }
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [search]);

  const handleSearch = async (value: string) => {
    if (value.length > 0) {
      setSearch(value);
    } else {
      setSearch('');
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
                setSearch(pokemon.name);
                setSuggestions([]);
                router.push(`/pokemon/${pokemon.id}`);
              }}
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonAutocomplete;
