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
  emptyUsernameField,
  emptyEmailFields,
  emptyPasswordFields,
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
        `http://ec2-54-147-82-157.compute-1.amazonaws.com/api/users/${steamId}`,
        {
          pseudo: inputUsername,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
      )

        .then((response) => {
          console.log(response.data);
          if (response.data) {
            const newAction = usernamePatchMessage(true);
            store.dispatch(newAction);
            store.dispatch(emptyUsernameField());
            store.dispatch(getUserData());
          }
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(getUserData());
          if (error.response.data.pseudo.includes('Cette valeur est déjà utilisée.')) {
            const newAction = usernameError(true);
            store.dispatch(newAction);
          }
          else if (error.response.data.pseudo.includes('Cette chaîne est trop courte. Elle doit avoir au minimum 3 caractères.')) {
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
        `http://ec2-54-147-82-157.compute-1.amazonaws.com/api/users/${steamId}`,
        {
          email: inputEmail,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
      )

        .then((response) => {
          console.log(response.data);

          const newAction = emailPatchMessage(true);
          store.dispatch(newAction);
          store.dispatch(emptyEmailFields());
          store.dispatch(getUserData());
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(getUserData());

          if (error.response.data.email.includes('Cette valeur est déjà utilisée.')) {
            const newAction = emailError(true);
            store.dispatch(newAction);
          }
          else if (error.response.data.email.includes('Cette valeur ne doit pas être vide.')) {
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
        `http://ec2-54-147-82-157.compute-1.amazonaws.com/api/users/${steamId}`,
        {
          password: inputNewPassword,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
      )

        .then((response) => {
          console.log(response.data);
          if (response.data) {
            const newAction = passwordPatchMessage(true);
            store.dispatch(newAction);
            store.dispatch(emptyPasswordFields());
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
