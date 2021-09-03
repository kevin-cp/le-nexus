import {
  ADD_FRIEND_TO_FILTER,
  RESET_FRIEND_LIST,
  DISPLAY_ALL_FRIENDS,
  NO_FRIEND_FOUND,
  FRIENDS_FOUND,
  CHANGE_GAMESEARCH_INPUT,
  SET_GAME_IMAGE,
} from '../actions/homepage';

import {
  CHANGE_EMAIL_INPUT,
  CHANGE_PASSWORD_INPUT,
  CHANGE_PSEUDO,
  CHANGE_STEAMAVATAR,
  CHANGE_STEAMUSERNAME,
  CHANGE_STEAMID,
  CHANGE_TOKEN,
  CHANGE_VISIBILITY_STATE,
  IS_LOGGED,
  USER_DISCONNECTED,
  UPDATE_LIBRARY,
  UPDATE_FRIENDSLIST,
  UPDATE_USER_LIST,
  CHANGE_ID,
  GET_ROLE,
} from '../actions/login';

const initialState = {
  // ici l'état initial
  id: '',
  email: '',
  password: '',
  pseudo: 'Monsieur Yoyo',
  steamId: '',
  steamUsername: '',
  steamAvatar: '',
  visibilityState: true,
  isLogged: false,
  token: '',
  library: [],
  friendsList: [],
  filteredFriends: [],
  noFriendsFound: null,
  gameSearch: '',
  userList: [],
  role: '',
  gameImage: '',
};

function homepageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case
      CHANGE_EMAIL_INPUT:
      return {
        ...state,
        email: action.newEmail,
      };

    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        password: action.newPassword,
      };

    case CHANGE_GAMESEARCH_INPUT:
      return {
        ...state,
        gameSearch: action.newSearch,
      };

    case CHANGE_PSEUDO:
      return {
        ...state,
        pseudo: action.newPseudo,
      };

    case CHANGE_STEAMID:
      return {
        ...state,
        steamId: action.newSteamId,
      };

    case CHANGE_STEAMAVATAR:
      return {
        ...state,
        steamAvatar: action.newSteamAvatar,
      };

    case CHANGE_STEAMUSERNAME:
      return {
        ...state,
        steamUsername: action.newSteamUsername,
      };

    case CHANGE_TOKEN:
      return {
        ...state,
        token: action.newToken,
      };

    case CHANGE_VISIBILITY_STATE:
      return {
        ...state,
        visibilityState: action.newVisibilityState,
      };

    case IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };

    case UPDATE_LIBRARY:
      return {
        ...state,
        library: action.newLibrary,
      };

    case CHANGE_ID:
      return {
        ...state,
        id: action.newId,
      };

    case GET_ROLE:
      return {
        ...state,
        role: action.role,
      };

    case SET_GAME_IMAGE:
      return {
        ...state,
        gameImage: action.newImage,
      }
    // ! ======================= FRIEND LIST ==================================
    case UPDATE_FRIENDSLIST:
      return {
        ...state,
        friendsList: action.newFriendsList,
      };

    case RESET_FRIEND_LIST:
      return {
        ...state,
        filteredFriends: [],
      };

    case ADD_FRIEND_TO_FILTER:
      return {
        ...state,
        filteredFriends: [...state.filteredFriends, action.addFriend],
      };

    case DISPLAY_ALL_FRIENDS:
      return {
        ...state,
        filteredFriends: state.friendsList,
      };

    case NO_FRIEND_FOUND:
      return {
        ...state,
        noFriendsFound: true,
      };

    case FRIENDS_FOUND:
      return {
        ...state,
        noFriendsFound: false,
      };

    case UPDATE_USER_LIST:
      return {
        ...state,
        userList: action.newList,
      };

    // ! ==========================================================
    case USER_DISCONNECTED:
      return {
        ...state,
        id: '',
        isLogged: false,
        email: '',
        pseudo: '',
        password: '',
        steamId: '',
        steamAvatar: '',
        steamUsername: '',
        token: null,
        visibilityState: false,
        library: [],
        friendsList: [],
        filteredFriends: [],
        noFriendsFound: null,
        gameSearch: '',
        gameImage: '',
        role: '',
      };

    default:
      return state;
  }
}

export default homepageReducer;
