export const CHANGE_EMAIL_INPUT = "CHANGE_EMAIL_INPUT";
export const CHANGE_PASSWORD_INPUT = "CHANGE_PASSWORD_INPUT";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";

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
