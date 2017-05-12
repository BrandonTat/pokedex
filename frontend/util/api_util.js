import {receivePokemonErrors} from './../actions/pokemon_actions';

export const getAllPokemon = () => {
  return (
    $.ajax({method: "GET", url:"/api/pokemon/index"})
  );
};

export const getPokemonDetail = (id) => {
  return (
    $.ajax({method: 'GET', url:`/api/pokemon/${id}`})
  );
};

export const postPokemon = (pokemon) =>{
  return (
      $.ajax({method: 'post', url:'/api/pokemon', data: pokemon})
    );
};
