import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import UniquePokeCard from "../components/Pokedex/UniquePokeCard";
import Error404Unique from "../components/Pokedex/Error404Unique";

const PokeInfo = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  return (
    <div>
      {
        hasError
        ?
        <Error404Unique />
        :
        <UniquePokeCard pokemon={pokemon}/>
      }
      
    </div>
  );
};

export default PokeInfo;
