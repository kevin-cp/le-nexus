import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import loginReducer from './loginReducer';
import profilepageReducer from './profilepageReducer';
import homepageReducer from './homepageReducer';
import navReducer from './navReducer';
import contactPageReducer from './contactPageReducer';

const rootReducer = combineReducers({
  homepage: homepageReducer,
  signInReducer: signInReducer,
  login: loginReducer,
  profilepageReducer: profilepageReducer,
  navReducer: navReducer,
  contactPageReducer: contactPageReducer,
});

export default rootReducer;
