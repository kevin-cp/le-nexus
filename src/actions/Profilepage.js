export const CHANGE_USERNAME_VALUE = 'CHANGE_USERNAME_VALUE';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_CONFIRM_EMAIL_VALUE = 'CHANGE_CONFIRM_EMAIL_VALUE';
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

export const submit = () => ({
  type: SUBMIT,
});
