import { loginError, LOGIN_ERROR, LOGIN_SUCCESSFULL } from "../actions/login";

const initialState = {
  // ici l'état initial
  loginError: false,
  loginSuccessfull: false,
};

function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
      };

    case LOGIN_SUCCESSFULL:
      return {
        ...state,
        loginSuccessfull: true,
      };

    default:
      return state;
  }
}

export default loginReducer;
