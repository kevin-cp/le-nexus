import {
  CHANGE_USERNAME_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_CONFIRM_EMAIL_VALUE,
  CHANGE_CURRENT_PASSWORD_VALUE,
  CHANGE_CONFIRM_PASSWORD_VALUE,
  CHANGE_NEW_PASSWORD_VALUE,
  USERNAME_ERROR,
} from 'src/actions/Profilepage';

const initialState = {
  inputUsername: '',
  inputEmail: '',
  inputConfirmEmail: '',
  inputCurrentPassword: '',
  inputNewPassword: '',
  inputConfirmPassword: '',
  usernameError: false,
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

    case CHANGE_CURRENT_PASSWORD_VALUE:
      return {
        ...state,
        inputCurrentPassword: action.value,
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

    default:
      return state;
  }
}

export default profilepageReducer;
