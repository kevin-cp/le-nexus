/* eslint-disable max-len */
import { connect } from 'react-redux';

// on importe le composant de présentation
import App from 'src/components/App';

import { getUserData } from 'src/actions/login';
import { checkNotification } from 'src/actions/nav';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isLogged: state.homepage.isLogged,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({

  // Lorsqu'on raffraichit la page, on récupère les données du User et on vérifie s'il y a des notifications
  refreshData: () => {
    dispatch(checkNotification());
    dispatch(getUserData());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
