import {
  CHANGE_USERNAME_VALUE,
  CHANGE_EMAIL_VALUE,
  CHANGE_CONFIRM_EMAIL_VALUE,
} from 'src/actions/Profilepage';

const initialState = {
  inputUsername: '',
  inputEmail: '',
  inputConfirmEmail: '',
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

    default:
      return state;
  }
}

export default profilepageReducer;
