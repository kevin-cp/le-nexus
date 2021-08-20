import { combineReducers } from 'redux';

import homepageReducer from './homepageReducer';

const rootReducer = combineReducers({
  homepage: homepageReducer,
});

export default rootReducer;
