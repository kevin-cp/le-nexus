import {
  CHANGE_EMAIL_VALUE,
  CHANGE_TEXT_VALUE,
  MESSAGE_SENT,
} from 'src/actions/contact';

const initialState = {
  // ici l'état initial
  emailInput: '',
  textinput: '',
  messageIsSent: false,
};

function contactPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        emailInput: action.value,
      };
    case CHANGE_TEXT_VALUE:
      return {
        ...state,
        textinput: action.value,
      };
    case MESSAGE_SENT:
      return {
        ...state,
        messageIsSent: true,
        emailInput: '',
        textinput: '',
      };
    default:
      return state;
  }
}

export default contactPageReducer;
