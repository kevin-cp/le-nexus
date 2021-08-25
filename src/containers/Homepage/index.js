import { connect } from 'react-redux';

// on importe le composant de présentation
import Homepage from 'src/components/Homepage';
import { handleSearchGame } from '../../actions/homepage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  pseudo: state.homepage.pseudo,
  steamUsername: state.homepage.steamUsername,
  steamAvatar: state.homepage.steamAvatar,
  steamLibrary: state.homepage.library,
  gameSearch: state.homepage.gameSearch,
  friendsList: state.homepage.friendsList,
  isLogged: state.homepage.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({

// nom de la prop à remplir: fonction qui dispatch l'action
  searchGame: (newSearch) => {
    dispatch(handleSearchGame(newSearch));
  },
});



// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
