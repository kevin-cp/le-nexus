import {
  CHANGE_USERNAME_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_CONFIRM_PASSWORD_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_STEAMID_VALUE,
  PASSWORD_ERROR,
  EMAIL_ERROR,
  USERNAME_ERROR,
  STEAM_ID_ERROR,
  IS_CHECKED,
  TOGGLE_PASSWORD_ERROR,
  passwordError,
  IS_CREATED,
  isChecked,
} from '../actions/SigninForm';

const initialState = {
  // ici l'état initial
  inputUsername: '',
  inputPassword: '',
  inputConfirmPassword: '',
  inputEmail: '',
  inputSteamId: null,
  passwordError: false,
  usernameError: false,
  emailError: false,
  steamIdError: false,
  isChecked: false,
  isCreated: '',
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

    case PASSWORD_ERROR:
      return {
        ...state,
        passwordError: true,
      };

    case EMAIL_ERROR:
      return {
        ...state,
        emailError: true,
      };

    case USERNAME_ERROR:
      return {
        ...state,
        usernameError: true,
      };

    case STEAM_ID_ERROR:
      return {
        ...state,
        steamIdError: true,
      };

    case IS_CHECKED:
      return {
        ...state,
        isChecked: !state.isChecked,
      };

    case TOGGLE_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: !passwordError,
      };

    case IS_CREATED:
      return {
        ...state,
        isCreated: action.value,
      };

    default:
      return state;
  }
}

export default signInreducer;
