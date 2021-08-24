import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import loginReducer from './loginReducer';

import homepageReducer from './homepageReducer';

const rootReducer = combineReducers({
  homepage: homepageReducer,
  signInReducer: signInReducer,
  login: loginReducer,
});

export default rootReducer;
