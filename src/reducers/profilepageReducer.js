import { SET_MODAL } from 'src/actions/profilepage';

const initialState = {
  open: false,
};

function profilepageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        open: action.open,
      };
    default:
      return state;
  }
}

export default profilepageReducer;
