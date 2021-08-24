import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import loginMiddleware from '../middlewares/loginMiddleware';

import signInMiddleware from '../middlewares/signInMiddleware';
import profileInfoMiddleware from '../middlewares/profileInfoMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    signInMiddleware,
<<<<<<< HEAD
    loginMiddleware,
=======
    profileInfoMiddleware,
>>>>>>> origin/Armand-Profilepage-updated
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
  // devToolsEnhancer(),
);

export default store;
