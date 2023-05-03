import React from 'react'
import './styles/pokedexHeader.css'

const Header = () => {
  return (
    <header className='pokedex__header'>
        <div className='pokedex__header-red'></div>
        <div className='pokedex__header-black'></div>
        <div className='pokedex__header-ball'>
          <img src="/img/background/pokeballHeader.png" alt="" />
        </div>
    </header>
  )
}

export default Header