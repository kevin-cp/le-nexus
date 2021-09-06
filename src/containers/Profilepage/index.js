import { connect } from 'react-redux';

// on importe le composant de présentation
import Profilepage from 'src/components/Profilepage';

import {
  changeUsernameValue,
  changeEmailValue,
  changeConfirmEmailValue,
  changeNewPasswordValue,
  changeConfirmPasswordValue,
  usernameSubmit,
  emailSubmit,
  passwordSubmit,
  toggleUsernameError,
  usernameError,
  toggleEmailError,
  emailError,
  togglePasswordError,
  passwordError,
  resetStateOnPatch,
} from 'src/actions/Profilepage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  newUsername: state.profilepageReducer.inputUsername,
  newEmail: state.profilepageReducer.inputEmail,
  confirmEmail: state.profilepageReducer.inputConfirmEmail,
  newPassword: state.profilepageReducer.inputNewPassword,
  confirmPassword: state.profilepageReducer.inputConfirmPassword,
  usernameError: state.profilepageReducer.usernameError,
  emailError: state.profilepageReducer.emailError,
  passwordError: state.profilepageReducer.passwordError,
  steamId: state.homepage.steamId,
  usernameToDisplay: state.homepage.pseudo,
  avatarToDisplay: state.homepage.steamAvatar,
  emailToDisplay: state.homepage.email,
  usernamePatchMessage: state.profilepageReducer.usernamePatchMessage,
  emailPatchMessage: state.profilepageReducer.emailPatchMessage,
  passwordPatchMessage: state.profilepageReducer.passwordPatchMessage,
  isLogged: state.homepage.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setNewUsername: (newValue) => {
    dispatch(changeUsernameValue(newValue));
  },

  setNewEmail: (newValue) => {
    dispatch(changeEmailValue(newValue));
  },

  setConfirmEmail: (newValue) => {
    dispatch(changeConfirmEmailValue(newValue));
  },

  setNewPassword: (newValue) => {
    dispatch(changeNewPasswordValue(newValue));
  },

  setConfirmPassword: (newValue) => {
    dispatch(changeConfirmPasswordValue(newValue));
  },

  handleUsernameSubmit: () => {
    dispatch(usernameSubmit());
  },

  handleEmailSubmit: () => {
    dispatch(emailSubmit());
  },

  handlePasswordSubmit: () => {
    dispatch(passwordSubmit());
  },

  toggleUsernameError: () => {
    dispatch(toggleUsernameError());
  },

  handleUsernameError: () => {
    dispatch(usernameError());
  },

  toggleEmailError: () => {
    dispatch(toggleEmailError());
  },

  handleEmailError: () => {
    dispatch(emailError());
  },

  togglePasswordError: () => {
    dispatch(togglePasswordError());
  },

  handlePasswordError: () => {
    dispatch(passwordError());
  },

  handleResetState: () => {
    dispatch(resetStateOnPatch());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profilepage);
