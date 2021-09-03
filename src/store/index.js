import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import loginMiddleware from '../middlewares/loginMiddleware';
import signInMiddleware from '../middlewares/signInMiddleware';
import navMiddleware from '../middlewares/navMiddleware';
import profileInfoMiddleware from '../middlewares/profileInfoMiddleware';
import contactMiddleware from '../middlewares/contactMiddleware';

// Fonctions pour le localstorage
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

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
  persistedState,
  // enhancer
  enhancers,
  // devToolsEnhancer(),
);

// Dès que le store est utilisé, on le stocke dans le localstorage
store.subscribe(() => {
  saveState({
    homepage: store.getState().homepage,
  });
});

export default store;
