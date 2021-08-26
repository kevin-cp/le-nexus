/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button,
  Form,
  Image,
  Popup,
  Modal,
  Grid,
  Message,
} from 'semantic-ui-react';

import './profilepage.scss';
import PropTypes from 'prop-types';

const Profilepage = ({
  usernameToDisplay,
  avatarToDisplay,
  emailToDisplay,
  newUsername,
  setNewUsername,
  newEmail,
  setNewEmail,
  confirmEmail,
  setConfirmEmail,
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  handleFormSubmit,
  handlePasswordSubmit,
  usernameError,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFormSubmit();
    handlePasswordSubmit();
  };

  return (

    <Grid centered>
      <div className="Profilepage-main">
        <h2 className="Profilepage-NexusUsername">
          {usernameToDisplay}
        </h2>
        <div className="Profilepage-avatar">
          <Image src={avatarToDisplay} circular />
          <Popup
            className="Profilepage-popup--import"
            content={(
              <Form.Field>
                <label>Nouvel avatar</label>
                <input className="Profilepage-popup--input" placeholder="chemin d'importation" />
                <Button className="Profilepage-popup--button" type="submit">Importer</Button>
              </Form.Field>
          )}
            on="click"
            offset={[0, 0]}
            trigger={<Button className="Profilepage-avatar--button" type="button" circular icon="settings" />}
          />
        </div>
        <Form
          className="Profilepage-form"
          onSubmit={handleSubmit}
        >
          {usernameError && (
          <Message negative>
            <Message.Header>Pseudo déjà existant</Message.Header>
          </Message>
          )}
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
              onSubmit={handleSubmit}
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
      </div>
    </Grid>
  );
};

Profilepage.propTypes = {
  newUsername: PropTypes.string.isRequired,
  setNewUsername: PropTypes.func.isRequired,
  newEmail: PropTypes.string.isRequired,
  setNewEmail: PropTypes.func.isRequired,
  confirmEmail: PropTypes.string.isRequired,
  setConfirmEmail: PropTypes.func.isRequired,
  currentPassword: PropTypes.string.isRequired,
  setCurrentPassword: PropTypes.func.isRequired,
  newPassword: PropTypes.string.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handlePasswordSubmit: PropTypes.func.isRequired,
  usernameError: PropTypes.bool.isRequired,
  usernameToDisplay: PropTypes.string.isRequired,
  avatarToDisplay: PropTypes.string.isRequired,
  emailToDisplay: PropTypes.string.isRequired,
};

export default Profilepage;
