export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const MESSAGE_SENT = 'MESSAGE_SENT';

export const changeEmailValue = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  value: value,
});

export const changeTextValue = (value) => ({
  type: CHANGE_TEXT_VALUE,
  value: value,
});

export const submitContactForm = () => ({
  type: SUBMIT_CONTACT_FORM,
});

export const messageSent = () => ({
  type: MESSAGE_SENT,
});
