import React from "react";
import {Link} from 'react-router-dom';

export const PokemonIndexItem = ({pokemon}) => (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      {pokemon.name}

      <img src={pokemon.image_url} height="40" width="40"></img>
    </Link>
  </li>
);
