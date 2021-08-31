import { loginError, LOGIN_ERROR, LOGIN_SUCCESSFULL, IS_LOADING } from "../actions/login";

const initialState = {
  // ici l'état initial
  loginError: false,
  isLoading: false,
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
        loginError: false,
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.newState,
      };

    default:
      return state;
  }
}

export default loginReducer;
