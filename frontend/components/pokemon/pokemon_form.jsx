import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      move1: "",
      move2: "",
      poke_type:"normal",
      image_url:""
    };
    this.types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let {name, attack, defense, move1, move2, poke_type, image_url} = this.state;

    attack = parseInt(attack);
    defense = parseInt(defense);
    const moves = [move1, move2];

    const newPokemon = {pokemon: {name, attack, defense, moves, poke_type, image_url}};
    this.props.createPokemon(newPokemon).then((createdPokemon)=> {
      this.props.history.push(`pokemon/${createdPokemon.id}`);
    });
  }

  errors(){
    console.log(this.props.errors);
    return (
      <ul>
        {this.props.errors.map((error)=>(<li>{error}</li>))}
      </ul>
    );
  }


  render() {
    const {name, attack, defense, move1, move2, poke_type, image_url} = this.state;
    return (
      <form>
        {this.errors()}
        <input placeholder="name" value={name} onChange={this.update("name")}></input>
        <br></br>

        <input placeholder="attack" value={attack} onChange={this.update("attack")}></input>
        <br></br>

        <input placeholder="defense" value={defense} onChange={this.update("defense")}></input>
        <br></br>

        <input placeholder="move1" value={move1} onChange={this.update("move1")}></input>
        <br></br>

        <input placeholder="move2" value={move2} onChange={this.update("move2")}></input>
        <br></br>

        <select value={poke_type} onChange={this.update("poke_type")}>
          {this.types.map((type, idx)=>(
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>
        <br></br>

        <input placeholder="image url" value={image_url} onChange={this.update("image_url")}></input>
        <br></br>


        <input
          type="submit"
          onClick={ this.handleSubmit }
          value="Create Pokemon">

        </input>
      </form>
    );
  }
}

export default withRouter(PokemonForm);
