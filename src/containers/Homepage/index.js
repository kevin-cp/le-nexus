import { connect } from 'react-redux';

// on importe le composant de présentation
import Homepage from 'src/components/Homepage';
import { addFriendToFilter, displayAllFriends, friendsFound, handleSearchGame, noFriendsFound, resetFriendList } from '../../actions/homepage';


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
  filteredFriends: state.homepage.filteredFriends,
  isLogged: state.homepage.isLogged,
  noFriendsFound: state.homepage.noFriendsFound,
  userList: state.homepage.userList,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({

// nom de la prop à remplir: fonction qui dispatch l'action
  searchGame: (newSearch) => {
    dispatch(handleSearchGame(newSearch));
  },

  resetFriendList: () => {
    dispatch(resetFriendList());
  },

  addFriendToFilter: (friend) => {
    dispatch(addFriendToFilter(friend));
  },

  displayAllFriends: () => {
    dispatch(displayAllFriends());
  },

  didntFindFriends: () => {
    dispatch(noFriendsFound());
  },

  foundFriends: () => {
    dispatch(friendsFound());
  },

});



// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
