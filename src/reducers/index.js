import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import loginReducer from './loginReducer';
import profilepageReducer from './profilepageReducer';

import homepageReducer from './homepageReducer';

const rootReducer = combineReducers({
  homepage: homepageReducer,
  signInReducer: signInReducer,
  login: loginReducer,
  profilepageReducer: profilepageReducer,
});

export default rootReducer;
