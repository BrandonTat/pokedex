import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const {pokemon} = this.props;
    // Possibly add route path
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <div>
        < Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer }/>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
