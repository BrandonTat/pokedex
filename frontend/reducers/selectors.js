import {values} from 'lodash';

export const selectAllPokemon = state => (
  values(state.pokemon)
);

// export const selectAllPokemon = state => {
//   let pokemon = [];
//   let ids = Object.keys(state.pokemon);
//
//   for (var i = 0; i < ids.length; i++) {
//     pokemon.push(state.pokemon[ids[i]]);
//   }
//
//   return pokemon;
// };
