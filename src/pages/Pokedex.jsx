import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import "./css/Pokedex.css"
import Header from '../components/Pokedex/Header'
import Footer from '../components/Pokedex/Footer'


const Pokedex = () => {

const [formUrl, setFormUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

const {trainerName} = useSelector(state => state)

  return (
    <div className='pokedex__container'>
        <Header />
        <h1>Pokedex</h1>
        <p><span>Welcome {trainerName}</span></p>
        <FormPoke setFormUrl={setFormUrl}/>
        <PokeContainer formUrl={formUrl}/>
        <Footer />
    </div>
  )
}

export default Pokedex