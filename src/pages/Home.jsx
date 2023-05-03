import React from "react";
import FormNameUser from "../components/FormNameUser";
import "./css/home.css";

const Home = () => {
  return (
    <div className="home__container">
      <header className="home__header">
        <div className="home__header-red"></div>
        <div className="home__header-black"></div>
        <div className="home__header-img">
          <img src="/img/background/pokeball.png" alt="" />
        </div>
        <div className="home__header-white"></div>
      </header>
      <div className="home__body">
        <h1 className="home__h1">Pokedex</h1>
        <h2 className="home__h2">Hi trainer!</h2>
        <p className="home__p">please give us your name to start.</p>
        <FormNameUser />
      </div>
    </div>
  );
};

export default Home;
