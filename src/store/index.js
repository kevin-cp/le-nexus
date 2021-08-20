import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import homepageReducer from 'src/reducers/homepageReducer';

const store = createStore(
  // reducer
  homepageReducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
