import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import loginMiddleware from '../middlewares/loginMiddleware';
import signInMiddleware from '../middlewares/signInMiddleware';
import navMiddleware from '../middlewares/navMiddleware';
import profileInfoMiddleware from '../middlewares/profileInfoMiddleware';
import contactMiddleware from '../middlewares/contactMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    signInMiddleware,
    loginMiddleware,
    // ... d'autres middlewares
    navMiddleware,
    profileInfoMiddleware,
    contactMiddleware,
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
