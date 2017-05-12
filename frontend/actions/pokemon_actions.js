import * as APIUtil from './../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS";


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
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

export const createPokemon = (pokemon1) => (dispatch) => {
  return APIUtil.postPokemon(pokemon1)
    .then(pokemon2 => {
      dispatch(receivePokemon(pokemon2));
      return pokemon2;
    })
    .fail((errors) => {
      dispatch(receivePokemonErrors(errors.responseJSON));
    });
};

export const receivePokemonErrors = errors => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});
