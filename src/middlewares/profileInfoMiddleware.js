
import axios from 'axios';

import { USERNAME_SUBMIT, EMAIL_SUBMIT, PASSWORD_SUBMIT } from 'src/actions/Profilepage';

const profileInfoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USERNAME_SUBMIT: {
      const {
        steamId,
        token,
      } = store.getState().homepage;

      const {
        inputUsername,
      } = store.getState().profilepageReducer;

      axios.patch(
        `http://localhost:8000/api/users/${steamId}`,
        {
          pseudo: inputUsername,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

    case EMAIL_SUBMIT: {
      const {
        steamId,
        token,
      } = store.getState().homepage;

      const {
        inputEmail,
      } = store.getState().profilepageReducer;

      axios.patch(
        `http://localhost:8000/api/users/${steamId}`,
        {
          email: inputEmail,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
        token,
      } = store.getState().homepage;

      const {
        inputNewPassword,
      } = store.getState().profilepageReducer;

      axios.patch(
        `http://localhost:8000/api/users/${steamId}`,
        {
          password: inputNewPassword,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
