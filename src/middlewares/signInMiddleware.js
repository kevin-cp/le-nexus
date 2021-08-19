import axios from 'axios';

import { SUBMIT } from '../actions/SigninForm';

const signInMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT: {
      // on va piocher les informations dans le tiroir du state
      const {
        email,
        password,
        username,
        steamId,
      } = store.getState().signInReducer;

      axios.post(
        'http://localhost:3001/login',
        {
          email: email,
          password: password,
          username: username,
          steamId: steamId,
        },
      )
        .then((response) => {
          console.log(response);
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

export default signInMiddleware;
