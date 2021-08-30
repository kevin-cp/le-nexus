import axios from 'axios';
import {
  SEARCH_FRIEND_PROFILE,
  displayResults,
  FRIEND_REQUEST,
  CHECK_NOTIFICATION,
  updateSenderId,
  hasNotification,
} from 'src/actions/nav';

const navMiddleware = (store) => (next) => (action) => {
  // je peux réagir au cas par cas suivant l'action,
  // un switch fonctionne bien
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SEARCH_FRIEND_PROFILE: {
      const {
        inputSearch,
      } = store.getState().navReducer;

      const {
        token,
      } = store.getState().homepage;

      axios.get(
        `http://localhost:8000/api/users/pseudo/${inputSearch}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(displayResults(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case FRIEND_REQUEST: {
      const {
        token,
        id,
      } = store.getState().homepage;

      const {
        friendToRequest,
      } = store.getState().navReducer;

      axios.post(
        'http://localhost:8000/api/request',
        // données
        {
          sender: id,
          target: friendToRequest,
          type: 'friend',
        },
        // options (tokens)
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    case CHECK_NOTIFICATION: {
      const {
        token,
      } = store.getState().homepage;

      const {
        id,
      } = store.getState().homepage;

      axios.get(
        `http://localhost:8000/api/users/${id}/requests`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          if ((response.data).length !== 0) {
            store.dispatch(updateSenderId(response.data));
            store.dispatch(hasNotification());
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
  }
  next(action);
};

export default navMiddleware;
