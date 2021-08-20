import { combineReducers } from 'redux';
import signInReducer from './signInReducer';

import homepageReducer from './homepageReducer';

const rootReducer = combineReducers({
  homepage: homepageReducer,
  signInReducer: signInReducer,
});

export default rootReducer;
