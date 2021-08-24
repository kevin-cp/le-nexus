import { loginError, LOGIN_ERROR, LOGIN_SUCCESSFULL } from "../actions/login";

const initialState = {
  // ici l'état initial
  loginError: false,
};

function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
      };

    default:
      return state;
  }
}

export default loginReducer;
