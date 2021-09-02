import { connect } from 'react-redux';

// on importe le composant de présentation
import Contact from 'src/components/Contact';
import { changeEmailValue, changeTextValue, submitContactForm } from '../../actions/contact';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  emailValue: state.contactPageReducer.emailInput,
  textValue: state.contactPageReducer.textInput,
  messageSent: state.contactPageReducer.messageIsSent,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setEmailvalue: (newValue) => {
    dispatch(changeEmailValue(newValue));
  },
  setTextValue: (newValue) => {
    dispatch(changeTextValue(newValue));
  },

  handleContactFormSubmit: () => {
    dispatch(submitContactForm());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
