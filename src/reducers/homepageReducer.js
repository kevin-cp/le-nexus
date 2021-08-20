const initialState = {
  // ici l'état initial
  email: '',
  password: '',
  pseudo: 'Monsieur Yoyo',
  steamId: '',
  steamUsername: 'Tartalognon',
  steamAvatar: 'https://avatarfiles.alphacoders.com/161/161326.png',
  visibilityState: true,
  isLogged: false,
};

function homepageReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homepageReducer;
