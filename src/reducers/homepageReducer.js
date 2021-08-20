import { CHANGE_EMAIL_INPUT, CHANGE_PASSWORD_INPUT } from "../actions/login";

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

    default:
      return state;
  }
}

export default homepageReducer;
