import axios from 'axios';

import {
  SUBMIT,
  usernameError,
  emailError,
  steamIdError,
  isCreated,
  emptyStateAfterSubmit,
} from '../actions/SigninForm';

import {
  setLoading,
} from '../actions/login';

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
        'http://ec2-54-147-82-157.compute-1.amazonaws.com/api/users',
        {
          email: inputEmail,
          password: inputPassword,
          pseudo: inputUsername,
          steamId: inputSteamId,
          isLogged: true,
        },
      )
        .then((response) => {
          console.log(Object.response);
          if (response.statusText.includes('Created')) {
            const newAction = isCreated(response.statusText);
            store.dispatch(newAction);
          }
          store.dispatch(emptyStateAfterSubmit());
        })
        .catch((error) => {
          console.log(error.response.data.errors);

          if (error.response.data.errors.detail.includes('pseudo')) {
            const newAction = usernameError(true);
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
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default signInMiddleware;
