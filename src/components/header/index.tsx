import React, {useState} from 'react'
import './style.scss'
import LogoAssets from '../../assets/pokeapi-logo.png'
import { RequestPokemon } from '../consultApi'

const Header = () => {

  const [pokemonSearch, setPokemonSearch] = useState('')

  const handlePokemon = (e: {target: {value: string}}) => {
    setPokemonSearch(e.target.value)
    console.log(pokemonSearch)
  }

  return (
    <>
      <header className="header">
        <div className="header__side-left">
          <a href="/"><img src={LogoAssets} className="header__side-left-logo"/></a>
        </div>
        <div className="header__side-middle">
          <input type="text" className="header__side-middle-search" placeholder='Pesquisa aqui o pokémon' onChange={handlePokemon} value={pokemonSearch}/>
          <RequestPokemon pokemon={pokemonSearch}/>
        </div>
        <div className="header__side-right">
          <nav className="header__side-right-nav">
            <ul className='header__side-right-menu'>
              <li className="header__side-right-item"><a href="/Pokemons">Pokemons</a></li>
              <li className="header__side-right-item"><a href="/About">About</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header