/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import NexuslogoNav from 'src/assets/images/Nexus-logo-nav.png';

import {
  Button,
  Checkbox,
  Form,
  Message,
  Header,
  Grid,
  Image,
} from 'semantic-ui-react';

import './signinform.scss';

const SignInForm = ({
  newUsername,
  password,
  confirmPassword,
  email,
  SteamId,
  setUsername,
  setPassword,
  setConfirmPassword,
  setEmail,
  setSteamId,
  handleFormSubmit,
  passwordError,
  handlePasswordError,
  emailError,
  usernameError,
  steamIdError,
  isChecked,
  handleIsChecked,
  togglePasswordError,
}) => {
  // dans le handleSubmit je fais une comparaison de mot de passe
  // si le mdp et la confirmation sont différents on aura un message sinon c'est ok
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (password === confirmPassword && isChecked === true) {
      togglePasswordError();
      handleFormSubmit();
    }
    else {
      handlePasswordError();
    }
  };

  return (
    <Container className="Profilepage-container">
      <Grid className="Profilepage-main">
        <h2 className="Profilepage-NexusUsername">
          {usernameToDisplay}
        </h2>
        <div className="Profilepage-avatar">
          <Image centered src={avatarToDisplay} circular />
          <Popup
            className="Profilepage-popup--import"
            content={(
              <Form>
                <label>Nouvel avatar</label>
                <input className="Profilepage-popup--input" placeholder="chemin d'importation" />
                <Button className="Profilepage-popup--button" type="submit">Importer</Button>
              </Form>
)}
            on="click"
            offset={[0, 0]}
            trigger={<Button className="Profilepage-avatar--button" type="button" circular icon="settings" />}
          />
        </div>
        <Form
          className="Profilepage-form"
          onSubmit={handleSubmitForm}
        >
          <Form.Field className="Profilepage-username">
            <label>Nouvel identifiant Nexus</label>
            <input
              type="text"
              className="Profilepage-username--input"
              placeholder={usernameToDisplay}
              value={newUsername}
              onChange={(event) => {
                // console.log(event.currentTarget.value);
                setNewUsername(event.currentTarget.value);
              }}
            />
          </Form.Field>
          <Form.Field className="Profilepage-email">
            <label>Email</label>
            <input
              className="Profilepage-email--input"
              type="email"
              placeholder={emailToDisplay}
              value={newEmail}
              onChange={(event) => {
                // console.log(event.currentTarget.value);
                setNewEmail(event.currentTarget.value);
              }}
            />
            <input
              className="Profilepage-email--inputConfirm"
              type="email"
              placeholder="Confirm Nouvelle adresse mail"
              value={confirmEmail}
              onChange={(event) => {
                // console.log(event.currentTarget.value);
                setConfirmEmail(event.currentTarget.value);
              }}
            />
          </Form.Field>
          <Button type="submit">Enregistrer</Button>
        </Form>
        <Modal
          className="Password-modal"
          header="Changement de mot de passe"
          trigger={<Button>Changer le mot de passe</Button>}
          content={(
            <Form
              className="Password-form"
              onSubmit={handleSubmitPassword}
            >
              <input
                className="Password-form--input"
                type="password"
                placeholder="Mot de passe actuel"
                value={currentPassword}
                onChange={(event) => {
                  // console.log(event.currentTarget.value);
                  setCurrentPassword(event.currentTarget.value);
                }}
              />
              <input
                className="Password-form--input"
                type="password"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(event) => {
                  // console.log(event.currentTarget.value);
                  setNewPassword(event.currentTarget.value);
                }}
              />
              <input
                className="Password-form--input"
                type="password"
                placeholder="Confirmer nouveau mot de passe"
                value={confirmPassword}
                onChange={(event) => {
                  // console.log(event.currentTarget.value);
                  setConfirmPassword(event.currentTarget.value);
                }}
              />
              <Button className="Password-form--button" type="submit">Enregistrer</Button>
            </Form>
)}
          actions={['Cancel']}
        />
      </Grid>
    </Container>
  );
};

SignInForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  SteamId: PropTypes.number,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setSteamId: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  emailError: PropTypes.bool.isRequired,
  handlePasswordError: PropTypes.func.isRequired,
  usernameError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
  steamIdError: PropTypes.bool.isRequired,
};

export default SignInForm;
