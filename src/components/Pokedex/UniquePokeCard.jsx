import React from "react";
import "./styles/uniquePokeCard.css";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const UniquePokeCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/pokedex')
  }

  return (
    <div className="upoke__container">
      <Header />
      <div className="upoke__btn">
        <button onClick={handleReturn} className="upoke__button">return</button>
      </div>
      <div className="upoke__pokemon">
        <header className={`upoke__header bg-${pokemon?.types[0].type.name}`}>
          <img
            className="upoke__sprite"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <div className="upoke__info">
          <span className="upoke_id">#{pokemon?.id}</span>
          <span className="upoke_name">{pokemon?.name}</span>
          <ul className="upoke_ul">
            <li className="upoke_li">
              <span className="upoke_li-label">weight</span>
              <span className="upoke_li-info">{pokemon?.weight}</span>
            </li>
            <li className="upoke_li">
              <span className="upoke_li-label">height</span>
              <span className="upoke_li-info">{pokemon?.height}</span>
            </li>
          </ul>
        </div>
        <div className="upoke__features">
          <div className="upoke__types">
            <span className="upoke__type">Types</span>
            <ul className="upoke__type-ul">
              {pokemon?.types.map((objType) => (
                <li
                  className={`upoke__type-li color__li-${objType.type.name}`}
                  key={objType.type.url}
                >
                  {objType.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="upoke__abilities">
            <span className="upoke__abilitie">Abilities</span>
            <ul className="upoke__abilities-ul">
              {pokemon?.abilities.map((objAbilitie) => (
                <li
                  className="upoke__abilities-li"
                  key={objAbilitie.ability.name}
                >
                  {objAbilitie.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="upoke__stats">
          {pokemon?.stats.map((objStat) => (
            <>
              <div key={objStat.stat.url}>
                <p>{objStat.stat.name}</p>
                <div className="container__stat">
                  <div
                    className="skills"
                    style={{
                      width: `${objStat.base_stat}%`,
                      backgroundColor: "#383838",
                    }}
                  >
                    {objStat.base_stat} EVs{" "}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="upoke__movents">
        <h2>Movements</h2>
        <div className="upoke__total">
          {pokemon?.moves.map((move) => (
            <span className="movement" key={move.move.name}>
              {move.move.name}
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UniquePokeCard;
