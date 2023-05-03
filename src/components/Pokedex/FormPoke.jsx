import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import './styles/FormPoke.css'

const FormPoke = ({setFormUrl}) => {
  const inputPoke = useRef();

  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(url);

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleSumit = (e) => {
    e.preventDefault();
    const pokeName = inputPoke.current.value.trim().toLowerCase();
    navigate(`/pokedex/${pokeName}`);
  };

  const handleChange = (e) => {
    setFormUrl(e.target.value);
  };

  return (
    <div className="formpoke__container">
      <form className="formpoke__form" onSubmit={handleSumit}>
        <input ref={inputPoke} type="text" />
        <button className="formpoke__btn">search</button>
      </form>
      <select onChange={handleChange}>
        <option value="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0">AllPokemosns</option>
        {types?.results.map((type) => (
          <option key={type.url} value={type.url}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormPoke;
