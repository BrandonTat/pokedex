import * as APIUtil from './../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.getAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receivePokemonDetail = (pokemonDetail) => ({
  type: RECEIVE_POKEMON_DETAIL,
  pokemonDetail
});

export const requestPokemonDetail = (id) => (dispatch) => {
  return APIUtil.getPokemonDetail(id)
    .then(pokemonDetail => dispatch(receivePokemonDetail(pokemonDetail)));
};
