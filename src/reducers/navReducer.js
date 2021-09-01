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
  ACCEPT_FRIEND_REQUEST,
  DENY_FRIEND_REQUEST,
  UPDATE_REQUEST_ID,
  HAS_NO_NOTIFICATION,
  NUMBER_OF_NOTIFICATIONS,
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
  requestId: '',
  numberOfnotifications: 0,

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

    case HAS_NO_NOTIFICATION:
      return {
        ...state,
        hasNotification: false,
      };

    case ACCEPT_FRIEND_REQUEST:
      return {
        ...state,
      };

    case DENY_FRIEND_REQUEST:
      return {
        ...state,
      };

    case UPDATE_REQUEST_ID:
      return {
        ...state,
        requestId: action.requestId,
      };

    case NUMBER_OF_NOTIFICATIONS:
      return {
        ...state,
        numberOfnotifications: action.number,
      };

    default:
      return state;
  }
}

export default navReducer;
