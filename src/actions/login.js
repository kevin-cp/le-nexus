export const CHANGE_EMAIL_INPUT = "CHANGE_EMAIL_INPUT";
export const CHANGE_PASSWORD_INPUT = "CHANGE_PASSWORD_INPUT";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const GET_USER_DATA= "GET_USER_DATA";
export const IS_LOGGED = "USER_LOGGED";
export const USER_DISCONNECTED = "USER_DISCONNECTED";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESSFULL = "LOGIN_SUCCESSFULL";

// state modification
export const CHANGE_PSEUDO = "CHANGE_PSEUDO";
export const CHANGE_STEAMID = "CHANGE_STEAMID";
export const CHANGE_STEAMAVATAR = "CHANGE_STEAMAVATAR";
export const CHANGE_STEAMUSERNAME= "CHANGE_STEAMUSERNAME";
export const CHANGE_VISIBILITY_STATE = "CHANGE_VISIBILITY_STATE";
export const CHANGE_TOKEN = "CHANGE_TOKEN";
export const UPDATE_LIBRARY = "UPDATE_LIBRARY";


export const changeEmailInput = (newEmail) => ({
  type: CHANGE_EMAIL_INPUT,
  newEmail,
});

export const changePasswordInput = (newPassword) => ({
  type: CHANGE_PASSWORD_INPUT,
  newPassword,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});


export const userDisconnected = () => ({
  type: USER_DISCONNECTED,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const loginSuccessfull = () => ({
  type: LOGIN_SUCCESSFULL,
});


// ! ========================================CHANGEMENT STATE HOMEPAGE===================================================

// Pseudo
export const changePseudo = (newPseudo) => ({
  type: CHANGE_PSEUDO,
  newPseudo,
});
// steamId
export const changeSteamId = (newSteamId) => ({
  type: CHANGE_STEAMID,
  newSteamId,
});
// steamAvatar
export const changeSteamAvatar = (newSteamAvatar) => ({
  type: CHANGE_STEAMAVATAR,
  newSteamAvatar,
});

// isLogged
export const isLogged = () => ({
  type: IS_LOGGED,
});

// steamUsername
export const changeSteamUsername = (newSteamUsername) => ({
  type: CHANGE_STEAMUSERNAME,
  newSteamUsername,
});

// token
export const changeToken = (newToken) => ({
  type: CHANGE_TOKEN,
  newToken,
});

// visibilityState
export const changeVisibilityState = (newVisibilityState) => ({
  type: CHANGE_VISIBILITY_STATE,
  newVisibilityState,
});

// TODO Libraries
export const updateLibrary = (newLibrary) => ({
  type: UPDATE_LIBRARY,
  newLibrary,
});

