import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import PokeCard from "./PokeCard";
import Pagination from "./Pagination";
import "./styles/PokeContainer.css";

const PokeContainer = ({ formUrl }) => {
  const [pokemons, getAllPokemons] = useFetch(formUrl);

  const [page, setPage] = useState(1);
  const [forPage, setForPage] = useState(20);
  const [input, setInput] = useState(1);
  let max = 0;

  if (pokemons?.results) {
    max = pokemons?.results.length / forPage;
  } else {
    max = pokemons?.pokemon.length / forPage;
  }


  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);

  return (
    <div className="poke-container">
      {pokemons?.results ? (
        <>
          <div className="pokemons">
            {pokemons?.results
              .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
              .map((poke) => (
                <PokeCard key={poke.url} url={poke.url} />
              ))}
          </div>

          <Pagination
            page={page}
            setPage={setPage}
            max={max}
            inputReset={input}
            pokemons={pokemons}
          />
        </>
      ) : (
        <>
          <div className="pokemons">
            {pokemons?.pokemon
              .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
              .map((objPoke) => (
                <PokeCard key={objPoke.pokemon.url} url={objPoke.pokemon.url} />
              ))}
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            max={max}
            inputReset={input}
            pokemons={pokemons}
          />
        </>
      )}
    </div>
  );
};

export default PokeContainer;
