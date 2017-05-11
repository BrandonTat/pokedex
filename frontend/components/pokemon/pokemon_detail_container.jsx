import {connect} from 'react-redux';
import {requestPokemonDetail, receivePokemonDetail} from './../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = (dispatch) =>({
  requestPokemonDetail: (id)=>dispatch(requestPokemonDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
