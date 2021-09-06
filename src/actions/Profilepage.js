export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_CONFIRM_EMAIL_VALUE = 'CHANGE_CONFIRM_EMAIL_VALUE';
export const CHANGE_CURRENT_PASSWORD_VALUE = 'CHANGE_CURRENT_PASSWORD_VALUE';
export const CHANGE_NEW_PASSWORD_VALUE = 'CHANGE_NEW_PASSWORD_VALUE';
export const CHANGE_CONFIRM_PASSWORD_VALUE = 'CHANGE_CONFIRM_PASSWORD_VALUE';
export const USERNAME_SUBMIT = 'USERNAME_SUBMIT';
export const EMAIL_SUBMIT = 'EMAIL_SUBMIT';
export const PASSWORD_SUBMIT = 'PASSWORD_SUBMIT';
export const USERNAME_ERROR = 'USERNAME_ERROR';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const TOGGLE_USERNAME_ERROR = 'TOGGLE_USERNAME_ERROR';
export const TOGGLE_EMAIL_ERROR = 'TOGGLE_EMAIL_ERROR';
export const TOGGLE_PASSWORD_ERROR = 'TOGGLE_PASSWORD_ERROR';
export const USERNAME_PATCH_MESSAGE = 'USERNAME_PATCH_MESSAGE';
export const EMAIL_PATCH_MESSAGE = 'EMAIL_PATCH_MESSAGE';
export const PASSWORD_PATCH_MESSAGE = 'PASSWORD_PATCH_MESSAGE';
export const EMPTY_USERNAME_FIELD = 'EMPTY_USERNAME_FIELD';
export const EMPTY_EMAIL_FIELDS = 'EMPTY_EMAIL_FIELDS';
export const EMPTY_PASSWORD_FIELDS = 'EMPTY_PASSWORD_FIELDS';
export const RESET_STATE_ON_PATCH = 'RESET_STATE_ON_PATCH';

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

export const usernameSubmit = () => ({
  type: USERNAME_SUBMIT,
});

export const emailSubmit = () => ({
  type: EMAIL_SUBMIT,
});

export const passwordSubmit = () => ({
  type: PASSWORD_SUBMIT,
});

export const usernameError = () => ({
  type: USERNAME_ERROR,
});

export const passwordError = () => ({
  type: PASSWORD_ERROR,
});

export const emailError = () => ({
  type: EMAIL_ERROR,
});

export const toggleUsernameError = () => ({
  type: TOGGLE_USERNAME_ERROR,
});

export const toggleEmailError = () => ({
  type: TOGGLE_EMAIL_ERROR,
});

export const togglePasswordError = () => ({
  type: TOGGLE_PASSWORD_ERROR,
});

export const usernamePatchMessage = () => ({
  type: USERNAME_PATCH_MESSAGE,
});

export const emailPatchMessage = () => ({
  type: EMAIL_PATCH_MESSAGE,
});

export const passwordPatchMessage = () => ({
  type: PASSWORD_PATCH_MESSAGE,
});

export const emptyUsernameField = () => ({
  type: EMPTY_USERNAME_FIELD,
});

export const emptyEmailFields = () => ({
  type: EMPTY_EMAIL_FIELDS,
});

export const emptyPasswordFields = () => ({
  type: EMPTY_PASSWORD_FIELDS,
});

export const resetStateOnPatch = () => ({
  type: RESET_STATE_ON_PATCH,
});
