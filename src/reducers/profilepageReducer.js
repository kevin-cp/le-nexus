import {
  CHANGE_USERNAME_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_CONFIRM_EMAIL_VALUE,
  CHANGE_CONFIRM_PASSWORD_VALUE,
  CHANGE_NEW_PASSWORD_VALUE,
  USERNAME_ERROR,
  EMAIL_ERROR,
  PASSWORD_ERROR,
  TOGGLE_USERNAME_ERROR,
  TOGGLE_EMAIL_ERROR,
  usernameError,
  emailError,
  USERNAME_PATCH_MESSAGE,
  EMAIL_PATCH_MESSAGE,
  PASSWORD_PATCH_MESSAGE,
} from 'src/actions/Profilepage';

const initialState = {
  inputUsername: '',
  inputEmail: '',
  inputConfirmEmail: '',
  inputNewPassword: '',
  inputConfirmPassword: '',
  usernameError: false,
  emailError: false,
  passwordError: false,
  usernamePatchMessage: false,
  emailPatchMessage: false,
  passwordPatchMessage: false,
};

function profilepageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_USERNAME_VALUE:
      return {
        ...state,
        inputUsername: action.value,
      };

    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        inputEmail: action.value,
      };

    case CHANGE_CONFIRM_EMAIL_VALUE:
      return {
        ...state,
        inputConfirmEmail: action.value,
      };

    case CHANGE_NEW_PASSWORD_VALUE:
      return {
        ...state,
        inputNewPassword: action.value,
      };

    case CHANGE_CONFIRM_PASSWORD_VALUE:
      return {
        ...state,
        inputConfirmPassword: action.value,
      };

    case USERNAME_ERROR:
      return {
        ...state,
        usernameError: true,
      };

    case EMAIL_ERROR:
      return {
        ...state,
        emailError: true,
      };

    case PASSWORD_ERROR:
      return {
        ...state,
        passwordError: true,
      };

    case TOGGLE_USERNAME_ERROR:
      return {
        ...state,
        usernameError: !usernameError,
      };

    case TOGGLE_EMAIL_ERROR:
      return {
        ...state,
        emailError: !emailError,
      };

    case USERNAME_PATCH_MESSAGE:
      return {
        ...state,
        usernamePatchMessage: true,
      };

    case EMAIL_PATCH_MESSAGE:
      return {
        ...state,
        emailPatchMessage: true,
      };

    case PASSWORD_PATCH_MESSAGE:
      return {
        ...state,
        passwordPatchMessage: true,
      };

    default:
      return state;
  }
}

export default profilepageReducer;
