import axios from 'axios';

import {
  SUBMIT_CONTACT_FORM,
  messageSent,
} from '../actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

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
        'http://localhost:8000/api/message',
        // données
        {
          email: emailInput,
          content: textinput,
        },
        // options headers
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
