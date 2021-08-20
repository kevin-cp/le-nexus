import {
  CHANGE_USERNAME_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_CONFIRM_PASSWORD_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_STEAMID_VALUE,
} from '../actions/SigninForm';

const initialState = {
  // ici l'état initial
  inputUsername: '',
  inputPassword: '',
  inputConfirmPassword: '',
  inputEmail: '',
  inputSteamId: null,
};

function signInreducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_USERNAME_VALUE:
      return {
        ...state, // on injecte le state pour faire une copie et le modifier
        inputUsername: action.value, // action.value est ce qu'il y'a dans actions
      };

    case CHANGE_PASSWORD_VALUE:
      return {
        ...state,
        inputPassword: action.value,
        // on met le contenu de value dans action dans le state inputPassword
      };

    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        inputEmail: action.value,
        // on met le contenu de value dans action dans le state inputPassword
      };

    case CHANGE_STEAMID_VALUE:
      return {
        ...state,
        inputSteamId: action.value,
        // on met le contenu de value dans action dans le state inputPassword
      };

    case CHANGE_CONFIRM_PASSWORD_VALUE:
      return {
        ...state,
        inputConfirmPassword: action.value,
      };

    default:
      return state;
  }
}

export default signInreducer;
