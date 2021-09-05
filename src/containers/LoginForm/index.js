import { connect } from 'react-redux';
import { changeEmailInput, changePasswordInput, submitLogin, setLoading } from 'src/actions/login';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  email: state.homepage.email,
  password: state.homepage.password,
  loginError: state.login.loginError,
  isLogged: state.homepage.isLogged,
  isLoading: state.login.isLoading,
  isCreated: state.signInReducer.isCreated,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setEmail: (newEmail) => {
    dispatch(changeEmailInput(newEmail));
  },

  setPassword: (newPassword) => {
    dispatch(changePasswordInput(newPassword));
  },

  handleLogin: () => {
    dispatch(submitLogin());
  },

  launchLoading: (newState) => {
    dispatch(setLoading(newState));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
