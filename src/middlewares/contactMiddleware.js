import axios from 'axios';

import {
  SUBMIT_CONTACT_FORM,
  messageSent,
} from '../actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM: {
      const {
        emailInput,
        textinput,
      } = store.getState().contactPageReducer;

      const {
        token,
      } = store.getState().homepage;

      axios.post(
        'http://ec2-54-147-82-157.compute-1.amazonaws.com/api/message',
        // données
        {
          email: emailInput,
          content: textinput,
        },

      )
        .then((response) => {
          console.log(response);
          store.dispatch(messageSent());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default contactMiddleware;
