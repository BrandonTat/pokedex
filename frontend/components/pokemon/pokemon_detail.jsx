import React from 'react';
import {Link} from 'react-router-dom';
import ItemDetailContainer from './../item/item_detail_container';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
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

  renderItem(){
    if (this.props.pokemonDetail === undefined) {
      return "";
    }
    return (<Route
      path="/pokemon/:pokemonId/items/:itemId"
      component={ItemDetailContainer}
      />
    );
  }

  render(){
    let {id, poke_type, name, attack, defense, moves, items, image_url} = this.props.pokemonDetail;
    moves = moves || [];
    items = items || [];
    return (
      <ul id="detail">
        <li className="pokeName">{name}</li>
        <li ><div className="img-container"><img id="poke-image" src={image_url}/></div></li>
        <li>Type: {poke_type}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Moves: {moves.join(" ")}</li>
        <li>
          Items:
          <ul>
            {items.map((item)=>(
              <Link to={`/pokemon/${id}/items/${item.id}`} key={item.id}>
                <li >
                  <img src={item.image_url} height="25" width="25"></img>
                </li>
            </Link>))}
            {this.renderItem()}
          </ul>
        </li>
      </ul>
    );
  }

}

export default PokemonDetail;
