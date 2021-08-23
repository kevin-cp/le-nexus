import { connect } from 'react-redux';

// on importe le composant de présentation
import SignInForm from 'src/components/SignInForm';

import {
  changeUsernameValue,
  changePasswordValue,
  changeConfirmPasswordValue,
  changeEmailValue,
  changeSteamIdValue,
  submit,
  emailError,
} from '../../actions/SigninForm';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  username: state.signInReducer.inputUsername,
  password: state.signInReducer.inputPassword,
  confirmPassword: state.signInReducer.inputConfirmPassword,
  email: state.signInReducer.inputEmail,
  steamid: state.signInReducer.inputSteamId,
  errorPassword: state.signInReducer.errorPassword,
  emailError: state.signInReducer.emailError,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setUsername: (newValue) => {
    dispatch(changeUsernameValue(newValue));
  },

  setPassword: (newValue) => {
    dispatch(changePasswordValue(newValue));
  },

  setConfirmPassword: (newValue) => {
    dispatch(changeConfirmPasswordValue(newValue));
  },

  setEmail: (newValue) => {
    dispatch(changeEmailValue(newValue));
  },

  setSteamId: (newValue) => {
    dispatch(changeSteamIdValue(newValue));
  },

  handleFormSubmit: () => {
    dispatch(submit());
  },

  handleEmailError: () => {
    dispatch(emailError());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
