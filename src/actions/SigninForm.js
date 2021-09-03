export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const CHANGE_CONFIRM_PASSWORD_VALUE = 'CHANGE_CONFIRM_PASSWORD_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_STEAMID_VALUE = 'CHANGE_STEAMID_VALUE';
export const SUBMIT = 'SUBMIT';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const USERNAME_ERROR = 'USERNAME_ERROR';
export const STEAM_ID_ERROR = 'STEAM_ID_ERROR';
export const IS_CHECKED = 'IS_CHECKED';
export const TOGGLE_PASSWORD_ERROR = 'TOGGLE_PASSWORD_ERROR';
export const IS_CREATED = 'IS_CREATED';
export const EMPTY_STATE_AFTER_SUBMIT = 'EMPTY_STATE_AFTER_SUBMIT';

export const changeUsernameValue = (value) => ({
  type: CHANGE_USERNAME_VALUE,
  value: value,
});

export const changePasswordValue = (value) => ({
  type: CHANGE_PASSWORD_VALUE,
  value: value,
});

export const changeConfirmPasswordValue = (value) => ({
  type: CHANGE_CONFIRM_PASSWORD_VALUE,
  value: value,
});

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  value: value,
});

export const changeSteamIdValue = (value) => ({
  type: CHANGE_STEAMID_VALUE,
  value: value,
});

export const submit = () => ({
  type: SUBMIT,
});

export const passwordError = () => ({
  type: PASSWORD_ERROR,
});

export const emailError = () => ({
  type: EMAIL_ERROR,
});

export const usernameError = () => ({
  type: USERNAME_ERROR,
});

export const steamIdError = () => ({
  type: STEAM_ID_ERROR,
});

export const isChecked = () => ({
  type: IS_CHECKED,
});

export const togglePasswordError = () => ({
  type: TOGGLE_PASSWORD_ERROR,
});

export const isCreated = (value) => ({
  type: IS_CREATED,
  value: value,
});

export const emptyStateAfterSubmit = () => ({
  type: EMPTY_STATE_AFTER_SUBMIT,
});
