import axios from 'axios';

import {
  USERNAME_SUBMIT,
  EMAIL_SUBMIT,
  PASSWORD_SUBMIT,
  usernameError,
  emailError,
  usernamePatchMessage,
  emailPatchMessage,
  passwordPatchMessage,
} from 'src/actions/Profilepage';

import { getUserData } from 'src/actions/login';

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
          if (response.data) {
            const newAction = usernamePatchMessage(true);
            store.dispatch(newAction);
            store.dispatch(getUserData());
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(getUserData());
          if (error.response.data.pseudo.includes('This value is already used.')) {
            const newAction = usernameError(true);
            store.dispatch(newAction);
          }
          else if (error.response.data.pseudo.includes('This value is too short. It should have 3 characters or more.')) {
            const newAction = usernameError(true);
            store.dispatch(newAction);
          }
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
          if (response.data) {
            const newAction = emailPatchMessage(true);
            store.dispatch(newAction);
            store.dispatch(getUserData());
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(getUserData());

          if (error.response.data.email.includes('This value is already used.')) {
            const newAction = emailError(true);
            store.dispatch(newAction);
          }
          else if (error.response.data.email.includes('This value should not be blank.')) {
            const newAction = emailError(true);
            store.dispatch(newAction);
          }
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
          if (response.data) {
            const newAction = passwordPatchMessage(true);
            store.dispatch(newAction);
            store.dispatch(getUserData());
          }
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(getUserData());
        });
      break;
    } default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default profileInfoMiddleware;
