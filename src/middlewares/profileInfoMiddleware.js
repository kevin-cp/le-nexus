import axios from 'axios';

import { PROFILE_SUBMIT, PASSWORD_SUBMIT } from 'src/actions/Profilepage';

const profileInfoMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case PROFILE_SUBMIT: {
      const {
        steamId,
      } = store.getState().homepage;

      const {
        inputUsername,
        inputEmail,
      } = store.getState().profilepageReducer;

      axios.patch(
        `http://localhost:8000/api/users/${steamId}`,
        {
          pseudo: inputUsername,
          email: inputEmail,
        },
      )

        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case PASSWORD_SUBMIT: {
      const {
        steamId,
      } = store.getState().homepage;

      const {
        inputNewPassword,
      } = store.getState().profilepageReducer;

      axios.patch(
        `http://localhost:8000/api/users/${steamId}`,
        {
          password: inputNewPassword,
        },
      )

        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    } default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default profileInfoMiddleware;
