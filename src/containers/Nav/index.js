import { connect } from 'react-redux';

import { userDisconnected } from 'src/actions/login';
// on importe le composant de présentation
import Nav from 'src/components/Nav';
import {
  changeSearchValue,
  friendRequest,
  isNotSearching,
  isSearching,
  searchFriendProfile,
  friendToRequest,
  checkNotification,
  acceptFriendRequest,
  denyFriendRequest,
  updateRequestId,
  hasNoNotification,
} from '../../actions/nav';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  steamAvatar: state.homepage.steamAvatar,
  pseudo: state.homepage.pseudo,
  inputSearch: state.navReducer.inputSearch,
  userList: state.homepage.userList,
  results: state.navReducer.results,
  isSearching: state.navReducer.isSearching,
  resultList: state.navReducer.searchResult,
  friendToRequest: state.navReducer.friendToRequest,
  hasNotification: state.navReducer.hasNotification,
  friendRequests: state.navReducer.senderId,
  requestId: state.navReducer.requestId,
  numberOfnotifications: state.navReducer.numberOfnotifications,
  role: state.homepage.role,
  friendsList: state.homepage.friendsList,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleDisconnection: () => {
    dispatch(userDisconnected());
  },

  setInputSearch: (newValue) => {
    dispatch(changeSearchValue(newValue));
  },

  handleIsSearching: () => {
    dispatch(isSearching());
  },

  handleIsNotSearching: () => {
    dispatch(isNotSearching());
  },

  handleFriendSearch: () => {
    dispatch(searchFriendProfile());
  },

  handleFriendRequest: () => {
    dispatch(friendRequest());
  },

  handleFriendToRequestId: (newValue) => {
    dispatch(friendToRequest(newValue));
  },

  handleSearchNotification: () => {
    dispatch(checkNotification());
  },

  handleAcceptFriendRequest: () => {
    dispatch(acceptFriendRequest());
  },

  handleDenyFriendRequest: () => {
    dispatch(denyFriendRequest());
  },

  handleRequestId: (newValue) => {
    dispatch(updateRequestId(newValue));
  },

  handleHasNoNotification: () => {
    dispatch(hasNoNotification());
},
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
