import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error404Unique = () => {
  const navigate = useNavigate()
  const handleReturn = () => {
    navigate('/pokedex') 
  };


  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3 className="red">Oops! Pokemon not found</h3>
          <h1>
            <span className="yellow">4</span>
            <span>0</span>
            <span className="yellow">4</span>
          </h1>
        </div>
        <h2>we are sorry, but the pokemon you requested was not found</h2>
        <button onClick={handleReturn} className="error__btn">RETURN</button>
      </div>
    </div>
  );
};

export default Error404Unique