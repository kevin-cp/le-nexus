import {
  CHANGE_SEARCH_VALUE,
  IS_SEARCHING,
  IS_NOT_SEARCHING,
  SEARCH_FRIEND_PROFILE,
  DISPLAY_RESULTS,
} from 'src/actions/nav';

const initialState = {
  // contenu de l'input pour chercher un ami
  inputSearch: '',
  isSearching: false,
  searchResult: [],
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

    case SEARCH_FRIEND_PROFILE:
      return {
        ...state,
      };

    case DISPLAY_RESULTS:
      return {
        ...state,
        searchResult: action.resultList,
      };

    default:
      return state;
  }
}

export default navReducer;
