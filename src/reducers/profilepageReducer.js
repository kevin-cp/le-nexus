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
  TOGGLE_PASSWORD_ERROR,
  usernameError,
  emailError,
  passwordError,
  USERNAME_PATCH_MESSAGE,
  EMAIL_PATCH_MESSAGE,
  PASSWORD_PATCH_MESSAGE,
  EMPTY_USERNAME_FIELD,
  EMPTY_EMAIL_FIELDS,
  EMPTY_PASSWORD_FIELDS,
  RESET_STATE_ON_PATCH,
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

    case TOGGLE_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: !passwordError,
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

    case EMPTY_USERNAME_FIELD:
      return {
        ...state,
        inputUsername: '',
      };

    case EMPTY_EMAIL_FIELDS:
      return {
        ...state,
        inputEmail: '',
        inputConfirmEmail: '',
      };

    case EMPTY_PASSWORD_FIELDS:
      return {
        ...state,
        inputNewPassword: '',
        inputConfirmPassword: '',
      };

    case RESET_STATE_ON_PATCH:
      return {
        ...state,
        usernamePatchMessage: false,
        emailPatchMessage: false,
        passwordPatchMessage: false,
      };

    default:
      return state;
  }
}

export default profilepageReducer;
