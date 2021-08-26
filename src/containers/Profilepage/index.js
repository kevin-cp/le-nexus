import { connect } from 'react-redux';

// on importe le composant de présentation
import Profilepage from 'src/components/Profilepage';

import {
  changeUsernameValue,
  changeEmailValue,
  changeConfirmEmailValue,
  changeCurrentPasswordValue,
  changeNewPasswordValue,
  changeConfirmPasswordValue,
  profileSubmit,
  passwordSubmit,
} from 'src/actions/Profilepage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  newUsername: state.profilepageReducer.inputUsername,
  newEmail: state.profilepageReducer.inputEmail,
  confirmEmail: state.profilepageReducer.inputConfirmEmail,
  currentPassword: state.profilepageReducer.inputCurrentPassword,
  newPassword: state.profilepageReducer.inputNewPassword,
  confirmPassword: state.profilepageReducer.inputConfirmPassword,
  usernameError: state.profilepageReducer.usernameError,
  steamId: state.homepage.steamId,
  usernameToDisplay: state.homepage.pseudo,
  avatarToDisplay: state.homepage.steamAvatar,
  emailToDisplay: state.homepage.email,
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

  setCurrentPassword: (newValue) => {
    dispatch(changeCurrentPasswordValue(newValue));
  },

  setNewPassword: (newValue) => {
    dispatch(changeNewPasswordValue(newValue));
  },

  setConfirmPassword: (newValue) => {
    dispatch(changeConfirmPasswordValue(newValue));
  },

  handleFormSubmit: () => {
    dispatch(profileSubmit());
  },

  handlePasswordSubmit: () => {
    dispatch(passwordSubmit());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profilepage);
