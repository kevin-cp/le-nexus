export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_CONFIRM_EMAIL_VALUE = 'CHANGE_CONFIRM_EMAIL_VALUE';
export const CHANGE_CURRENT_PASSWORD_VALUE = 'CHANGE_CURRENT_PASSWORD_VALUE';
export const CHANGE_NEW_PASSWORD_VALUE = 'CHANGE_NEW_PASSWORD_VALUE';
export const CHANGE_CONFIRM_PASSWORD_VALUE = 'CHANGE_CONFIRM_PASSWORD_VALUE';
export const USERNAME_ERROR = 'USERNAME_ERROR';
export const SUBMIT = 'SUBMIT';

export const changeUsernameValue = (value) => ({
  type: CHANGE_USERNAME_VALUE,
  value: value,
});

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  value: value,
});

export const changeConfirmEmailValue = (value) => ({
  type: CHANGE_CONFIRM_EMAIL_VALUE,
  value: value,
});

export const changeCurrentPasswordValue = (value) => ({
  type: CHANGE_CURRENT_PASSWORD_VALUE,
  value: value,
});

export const changeNewPasswordValue = (value) => ({
  type: CHANGE_NEW_PASSWORD_VALUE,
  value: value,
});

export const changeConfirmPasswordValue = (value) => ({
  type: CHANGE_CONFIRM_PASSWORD_VALUE,
  value: value,
});

export const usernameError = () => ({
  type: USERNAME_ERROR,
});

export const submit = () => ({
  type: SUBMIT,
});
