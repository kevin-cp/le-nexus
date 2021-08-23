import { CHANGE_EMAIL_INPUT, CHANGE_PASSWORD_INPUT, CHANGE_PSEUDO, CHANGE_STEAMAVATAR, CHANGE_STEAMUSERNAME, CHANGE_STEAMID, CHANGE_TOKEN, CHANGE_VISIBILITY_STATE, IS_LOGGED, USER_DISCONNECTED } from "../actions/login";

const initialState = {
  // ici l'état initial
  email: '',
  password: '',
  pseudo: 'Monsieur Yoyo',
  steamId: '',
  steamUsername: 'Tartalognon',
  steamAvatar: 'https://avatarfiles.alphacoders.com/161/161326.png',
  visibilityState: true,
  isLogged: false,
  token: null,
};

function homepageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_EMAIL_INPUT:
      return {
        ...state,
        email: action.newEmail,
      };

    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        password: action.newPassword,
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

    case USER_DISCONNECTED:
      return {
        ...state,
        isLogged: false,
        email: '',
        pseudo: '',
        password: '',
        steamId: '',
        steamAvatar: '',
        steamUsername: '',
        token: null,
        visibilityState: false,

      };

    default:
      return state;
  }
}

export default homepageReducer;
