import axios from 'axios';
import { SEARCH_FRIEND_PROFILE, displayResults } from 'src/actions/nav';

const navMiddleware = (store) => (next) => (action) => {
  // je peux réagir au cas par cas suivant l'action,
  // un switch fonctionne bien
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SEARCH_FRIEND_PROFILE: {
      const {
        inputSearch,
      } = store.getState().navReducer;

      axios.get(
        `http://localhost:8000/api/user/pseudo/${inputSearch}`,
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
  }
  next(action);
};

export default navMiddleware;
