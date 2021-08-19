import { combineReducers } from 'redux';

// on importe tous les reducers
import signInReducer from './signInReducer';
// etc

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  signInReducer: signInReducer,
  // etc
});

export default rootReducer;
