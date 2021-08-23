/* eslint-disable default-case */
import axios from 'axios';


import { SUBMIT_LOGIN, getUserData, GET_USER_DATA, changePseudo, changeSteamId, changeSteamAvatar, changeSteamUsername, changeToken, changeVisibilityState, isLogged } from '../actions/login';

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

      axios.post(
        'http://localhost:8000/api/login_check',
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          console.log(response);
          // isLogged = true
          // store.dispatch(userLogged());
          // requête des récupérations de données
          store.dispatch(changeToken(response.data.token));
          store.dispatch(getUserData());
        })

        .catch((error) => {
          console.log(error);
        });
      break;
    }
    //! REQUETE QUI RECUPERE LES DONNEES DU USER
    case GET_USER_DATA:
      axios.get(
        'http://localhost:8000/api/users/76561197974266514'
      )
        .then((response)=> {
          console.log(response);
          // Maintenant il faut appeler toutes les fonctions qui modifient le state
          store.dispatch(changePseudo(response.data.pseudo));
          store.dispatch(changeSteamId(response.data.steamId));
          store.dispatch(changeSteamAvatar(response.data.steamAvatar));
          store.dispatch(changeSteamUsername(response.data.steamUsername));
          store.dispatch(changeVisibilityState(response.data.visibilityState));
          store.dispatch(isLogged());
        })
        .catch((error) =>{
          console.log(error);
        });
      break;
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default loginMiddleware;
