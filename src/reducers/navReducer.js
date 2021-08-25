import {
  CHANGE_SEARCH_VALUE,
} from 'src/actions/nav';

const initialState = {
  // contenu de l'input pour chercher un ami
  inputSearch: '',
};

function navReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        inputSearch: action.value,
      };

    default:
      return state;
  }
}

export default navReducer;
