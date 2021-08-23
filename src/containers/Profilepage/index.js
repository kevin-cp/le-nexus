import { connect } from 'react-redux';

// on importe le composant de présentation
import Profilepage from 'src/components/Profilepage';

import {
  changeUsernameValue,
  changeEmailValue,
  changeConfirmEmailValue,
  submit,
} from 'src/actions/Profilepage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  newUsername: state.inputUsername,
  newEmail: state.inputEmail,
  confirmEmail: state.inputConfirmEmail,
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

  handleFormSubmit: () => {
    dispatch(submit());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Profilepage);
