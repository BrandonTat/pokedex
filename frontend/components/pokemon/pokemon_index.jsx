import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const {pokemon} = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return (
      <div id="index">
        <div></div>
        <Route exact path="/" component={ PokemonFormContainer }/>
        <div id="PokemonDetailContainer">
          <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer }/>
        </div>
        <ul className="pokelist">
          {pokemonItems}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
