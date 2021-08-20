export const CHANGE_EMAIL_INPUT = "CHANGE_EMAIL_INPUT";
export const CHANGE_PASSWORD_INPUT = "CHANGE_PASSWORD_INPUT";

export const changeEmailInput = (newEmail) => ({
  type: CHANGE_EMAIL_INPUT,
  newEmail,
});

export const changePasswordInput = (newPassword) => ({
  type: CHANGE_PASSWORD_INPUT,
  newPassword,
});
