import axios from 'axios';

import { SUBMIT_LOGIN } from '../actions/login';

const loginMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT_LOGIN: {
      // on va piocher les informations dans le tiroir du state homepage
      const {
        email,
        password,
      } = store.getState().homepage;

      axios.post(
        'http://localhost:8000/api/login_check',
        {
          username: email,
          password: password,
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

export default loginMiddleware;
