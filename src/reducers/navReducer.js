import {
  CHANGE_SEARCH_VALUE,
  IS_SEARCHING,
  IS_NOT_SEARCHING,
} from 'src/actions/nav';

const initialState = {
  // contenu de l'input pour chercher un ami
  inputSearch: '',
  isSearching: false,
};

function navReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        inputSearch: action.value,
      };
    case IS_SEARCHING:
      return {
        ...state,
        isSearching: true,
      };
    case IS_NOT_SEARCHING:
      return {
        ...state,
        isSearching: false,
      };

    default:
      return state;
  }
}

export default navReducer;
