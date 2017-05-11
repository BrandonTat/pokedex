import {RECEIVE_POKEMON_DETAIL} from '../actions/pokemon_actions';

export const pokemonDetailReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON_DETAIL:
      return action.pokemonDetail;
    default:
      return true;
  }
};
