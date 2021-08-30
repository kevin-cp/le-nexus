import {
  CHANGE_SEARCH_VALUE,
  IS_SEARCHING,
  IS_NOT_SEARCHING,
  SEARCH_FRIEND_PROFILE,
  DISPLAY_RESULTS,
  FRIEND_REQUEST,
  FRIEND_TO_REQUEST,
  CHECK_NOTIFICATION,
  UPDATE_SENDER_ID,
  HAS_NOTIFICATION,
} from 'src/actions/nav';

const initialState = {
  // contenu de l'input pour chercher un ami
  inputSearch: '',
  isSearching: false,
  searchResult: [],
  // states pour les dedmandes d'amis
  friendToRequest: '',
  hasNotification: false,
  senderId: '',

};

function navReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        inputSearch: action.value,
      };
    case IS_SEARCHING:
      return {
        ...state,
        isSearching: true,
      };
    case IS_NOT_SEARCHING:
      return {
        ...state,
        isSearching: false,
      };

    case SEARCH_FRIEND_PROFILE:
      return {
        ...state,
      };

    case DISPLAY_RESULTS:
      return {
        ...state,
        searchResult: action.resultList,
      };

    case FRIEND_REQUEST:
      return {
        ...state,
      };

    case FRIEND_TO_REQUEST:
      return {
        ...state,
        friendToRequest: action.friendId,
      };

    case CHECK_NOTIFICATION:
      return {
        ...state,
      };

    case UPDATE_SENDER_ID:
      return {
        ...state,
        senderId: action.senderId,
      };

    case HAS_NOTIFICATION:
      return {
        ...state,
        hasNotification: true,
      };

    default:
      return state;
  }
}

export default navReducer;
