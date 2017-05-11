import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestPokemonDetail(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    let currentId = this.props.match.params.pokemonId;
    let newId = newProps.match.params.pokemonId;

    if (currentId !== newId ) {
      this.props.requestPokemonDetail(newId);
    }
  }

  render(){
    let {type, name, attack, defense, moves, items, image_url} = this.props.pokemonDetail;
    moves = moves || [];
    items = items || [];
    return (
      <ul>
        <li>Name: {name}</li>
        <li>Type: {type}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Moves: {moves.join(" ")}</li>
        <li><img src={image_url}/></li>
        <li>
          Items:
          <ul>
            {items.map((item)=><li key={item.id}>{item.name}</li>)}
          </ul>
        </li>
      </ul>
    );
  }

}

export default PokemonDetail;
