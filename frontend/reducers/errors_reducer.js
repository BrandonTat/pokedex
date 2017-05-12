import {RECEIVE_POKEMON_ERRORS} from '../actions/pokemon_actions';

export const ErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
