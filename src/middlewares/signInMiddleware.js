import axios from 'axios';

import {
  SUBMIT,
  usernameError,
  emailError,
  steamIdError,
} from '../actions/SigninForm';

const signInMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT: {
      // on va piocher les informations dans le tiroir du state
      const {
        inputUsername,
        inputPassword,
        inputEmail,
        inputSteamId,
      } = store.getState().signInReducer;

      // let url = `${process.env.REACT_APP_API_URL}/api/users`;

      axios.post(
        'http://localhost:8000/api/users',
        {
          email: inputEmail,
          password: inputPassword,
          pseudo: inputUsername,
          steamId: inputSteamId,
          isLogged: true,
          steamUsername: 'test',
          steamAvatar: 'test',
          visibilityState: true,
        },
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data.errors);

          if (error.response.data.errors.detail.includes('pseudo')) {
            const newAction = usernameError(true);
            store.dispatch(newAction);
          }

          if (!error.response.data.errors.detail.includes('pseudo')) {
            const newAction = usernameError(!true);
            store.dispatch(newAction);
          }

          if (error.response.data.errors.detail.includes('email')) {
            const newAction = emailError(true);
            store.dispatch(newAction);
          }

          if (error.response.data.errors.detail.includes('steamId')) {
            const newAction = steamIdError(true);
            store.dispatch(newAction);
          }
        });
      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default signInMiddleware;
