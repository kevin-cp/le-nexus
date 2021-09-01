/* eslint-disable import/prefer-default-export */

// Fonctions qui chargera le state depuis le localstorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (error) {
    return undefined;
  }
};

// Fonction pour sauvegarder le state dans le localstorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    // On stocke le state dans le localstorage après l'avoir converti en Json stringifié
    localStorage.setItem('state', serializedState);
  }
  catch (error) {
    // Ignore write errors.
  }
};
