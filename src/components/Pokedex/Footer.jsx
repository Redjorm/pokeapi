import React from "react";
import "./styles/pokedexFooter.css";
const Footer = () => {
  return (
    <footer className="pokedex__footer">
      <div className="pokedex__footer-black"></div>
      <div className="pokedex__footer-white"></div>
      <div className="pokedex__footer-ball">
        <img src="/img/background/pokeballFooter.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
