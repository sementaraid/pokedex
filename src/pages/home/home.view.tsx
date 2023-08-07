import { useState } from "react";
import { Pokemon } from "../../lib/graphql/graphql";

interface ViewProps {
  data: Pokemon[]
}

export function View (props: ViewProps) {
  const { data: pokemons } = props;
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const pokemonTypes = pokemons.map(pokemon => pokemon.types.map(type => type.name)).flat()
  const uniquePokemonTypes = [...new Set(pokemonTypes)]

  const handleTypeChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(selectedType => selectedType !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredPokemons = selectedTypes.length > 0
    ? pokemons.filter(pokemon => pokemon.types.some(type => selectedTypes.includes(type.name)))
    : pokemons;


  return (
    <div className="grid grid-cols-3 max-w-screen-lg m-auto">
      <div className="col-span-1">
        <h3 className="mb-4">Pokemon Types</h3>
        <div className="flex flex-col gap-4">
          {uniquePokemonTypes.map((type, index) => (
            <div className="flex gap-2" key={index}>
              <input 
                type="checkbox" 
                name="type" 
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                id={type.toLocaleLowerCase()}/>
              <label htmlFor={type.toLocaleLowerCase()}>{type}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 col-span-2">
        {filteredPokemons.map((pokemon, key) => (
          <div key={key} className="rounded-lg p-4 border">
            <div>
              <img src={pokemon.backSprite} alt={pokemon.species} className="object-cover w-full h-auto"/>
            </div>
            {pokemon.species}
          </div>
        ))}
      </div>
    </div>
  )
}