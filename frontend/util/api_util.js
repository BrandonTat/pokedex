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
