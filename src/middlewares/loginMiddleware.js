/* eslint-disable default-case */
import axios from 'axios';
import { displayAllFriends } from '../actions/homepage';

import { SUBMIT_LOGIN,
  getUserData,
  GET_USER_DATA,
  changePseudo,
  changeSteamId,
  changeSteamAvatar,
  changeSteamUsername,
  changeToken,
  changeVisibilityState,
  isLogged,
  updateLibrary,
  loginError,
  loginSuccessfull,
  updateFriendsList,
  GET_USER_FRIENDS,
  getUserFriends,
  setLoading,
  changeId,
  getRole,
} from '../actions/login';
import { checkNotification } from '../actions/nav';
import { isCreated } from '../actions/SigninForm';

const loginMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    //! REQUETE DU LOGIN, On transmet email + mdp pour se connecter
    case SUBMIT_LOGIN: {
      // on va piocher les informations dans le tiroir du state homepage
      const {
        email,
        password,
      } = store.getState().homepage;

      // let url = `${process.env.REACT_APP_API_URL}/api/login_check`;

      axios.post(
        'http://localhost:8000/api/login_check',
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          // console.log(response);
          // isLogged = true
          // store.dispatch(userLogged());
          // requête des récupérations de données
          store.dispatch(changeToken(response.data.payload.token));
          store.dispatch(changeSteamId(response.data.authenticatedUserId));
          // Pour faire disparaître le message isCreated au login
          store.dispatch(isCreated(''));
          store.dispatch(getUserData());
          store.dispatch(checkNotification());
        })

        .catch((error) => {
          console.log(error);
          if (error.response.data.message === 'Invalid credentials.') {
            store.dispatch(loginError());
          }
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;
    }
    //! REQUETE QUI RECUPERE LES DONNEES DU USER
    case GET_USER_DATA: {
      const {
        steamId,
        token,
      } = store.getState().homepage;

      // let url = `${process.env.REACT_APP_API_URL}/api/users/${steamId}`;

      axios.get(`http://localhost:8000/api/users/${steamId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // Maintenant il faut appeler toutes les fonctions qui modifient le state
          store.dispatch(changePseudo(response.data.pseudo));
          store.dispatch(changeSteamAvatar(response.data.steamAvatar));
          store.dispatch(changeSteamUsername(response.data.steamUsername));
          store.dispatch(changeVisibilityState(response.data.visibilityState));
          store.dispatch(updateLibrary(response.data.libraries));
          store.dispatch(changeId(response.data.id));
          // récupération du role pour afficher ou non le lien vers le back-office
          store.dispatch(getRole(response.data.roles[0]));

          // Maintenant il faut faire une requête pour appeler les données de la liste d'amis
          store.dispatch(getUserFriends());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;
    }

    case GET_USER_FRIENDS: {
      const {
        steamId,
        token,
      } = store.getState().homepage;

      // let url = `${process.env.REACT_APP_API_URL}/api/users/${steamId}`;

      axios.get(`http://localhost:8000/api/users/${steamId}/friends`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response)=> {
          // console.log(response);
          // Maintenant il faut appeler toutes les fonctions qui modifient le state
          store.dispatch(updateFriendsList(response.data));
          // Affiche tous les amis dès le chargement de la page homepage
          store.dispatch(displayAllFriends());
          //! ENFIN ON SE LOG
          store.dispatch(loginSuccessfull());
          store.dispatch(isLogged());
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;
    }
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default loginMiddleware;
