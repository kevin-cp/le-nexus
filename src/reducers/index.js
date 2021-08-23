import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import profilepageReducer from './profilepageReducer';

import homepageReducer from './homepageReducer';

const rootReducer = combineReducers({
  homepage: homepageReducer,
  signInReducer: signInReducer,
  profilepageReducer:profilepageReducer,
});

export default rootReducer;
