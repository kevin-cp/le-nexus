/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button,
  Form,
  Image,
  Modal,
  Grid,
  Container,
  Header,
  Label,
  Input,
  Message,
} from 'semantic-ui-react';

import { Redirect } from 'react-router-dom';

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
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  handleUsernameSubmit,
  handleEmailSubmit,
  handlePasswordSubmit,
  usernameError,
  emailError,
  passwordError,
  handleUsernameError,
  toggleUsernameError,
  handleEmailError,
  toggleEmailError,
  usernamePatchMessage,
  emailPatchMessage,
  passwordPatchMessage,
  handlePasswordError,
  togglePasswordError,
  isLogged,
  handleResetState,
}) => {
  const handleSubmitUsername = (evt) => {
    evt.preventDefault();
    if (!usernameError) {
      handleUsernameSubmit();
    }
    else {
      // handleUsernameError();
      toggleUsernameError();
    }
  };

  const handleSubmitEmail = (evt) => {
    evt.preventDefault();
    if (emailError && newEmail === confirmEmail) {
      handleEmailSubmit();
      toggleEmailError();
    }
    else {
      handleEmailError();
    }
  };

  const handleSubmitPassword = (evt) => {
    evt.preventDefault();
    if (newPassword === confirmPassword) {
      handlePasswordSubmit();
      togglePasswordError();
    }
    else {
      handlePasswordError();
    }
  };

  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  setTimeout(() => {
    handleResetState();
  }, 17000);

  return (

    <Grid
      className="main"
      style={{ height: '100vh' }}
      verticalAlign="middle"
      columns={2}
      centered
      stackable
    >
      <Grid.Column
        className="avatar"
        textAlign="center"
      >
        <Header
          as="h1"
          className="nexusUsername"
          textAlign="center"
        >
          {usernameToDisplay}
        </Header>
        <Image className="avatar-image" src={avatarToDisplay} size="medium" centered circular />
        <Grid.Column
          className="userInfoGroup"
        >
          <Header
            as="h2"
            className="nexusEmail"
          >
            {emailToDisplay}
          </Header>
        </Grid.Column>
      </Grid.Column>
      <Grid.Column
        className="forms"
        verticalAlign="middle"
        textAlign="center"
      >
        <Form
          className="mainform-username"
          onSubmit={handleSubmitUsername}
        >

          <Form.Field>
            <Label
              className="user-label"
              size="small"
              pointing="below"
              color="blue"
            >
              Nouvel identifiant Nexus
            </Label>
            <Input
              type="text"
              className="mainform-username--input"
              placeholder={usernameToDisplay}
              value={newUsername}
              onChange={(event) => {
                // console.log(event.currentTarget.value);
                setNewUsername(event.currentTarget.value);
              }}
            />
          </Form.Field>
          {/* Message qui s'affiche uniquement si le pseudo est déjà existant */}
          {usernameError && (
          <Message negative>
            <Message.Header>
              Pseudo déjà existant ou nombre de caractères insuffisant
            </Message.Header>
          </Message>
          )}
          {usernamePatchMessage && (
          <Message positive>
            <Message.Header>
              La modification a bien été prise en compte
            </Message.Header>
          </Message>
          )}
          <Button
            type="submit"
            className="user-submit"
          >
            Enregistrer
          </Button>
        </Form>

        <Form
          className="mainform-email"
          onSubmit={handleSubmitEmail}
        >
          <Form.Field required>
            <Label
              className="email-label"
              size="small"
              pointing="below"
              color="blue"
            >
              Email
            </Label>
            <Input
              className="mainform-email--input"
              type="email"
              placeholder={emailToDisplay}
              value={newEmail}
              onChange={(event) => {
                // console.log(event.currentTarget.value);
                setNewEmail(event.currentTarget.value);
              }}
            />
          </Form.Field>

          <Form.Field required>
            <Input
              className="mainform-email--inputConfirm"
              type="email"
              placeholder="Confirmer Nouvelle adresse mail"
              value={confirmEmail}
              onChange={(event) => {
                // console.log(event.currentTarget.value);
                setConfirmEmail(event.currentTarget.value);
              }}
            />
          </Form.Field>
          {emailError && (
          <Message negative>
            <Message.Header>E-mail déjà existant ou champ non renseigné</Message.Header>
          </Message>
          )}
          {emailPatchMessage && (
          <Message positive>
            <Message.Header>
              La modification a bien été prise en compte
            </Message.Header>
          </Message>
          )}
          <Button
            type="submit"
            className="email-submit"
          >
            Enregistrer
          </Button>
        </Form>

        <Modal
          className="password-modal"
          header="Changement de mot de passe"
          trigger={(
            <Button
              type="submit"
              className="modal-activate"
            >
              Changer votre mot de passe
            </Button>
            )}
          content={(
            <Form
              className="password-form"
              onSubmit={handleSubmitPassword}
            >

              <Form.Field>
                <Input
                  className="password-form--input"
                  type="password"
                  placeholder="Nouveau mot de passe"
                  value={newPassword}
                  onChange={(event) => {
                    // console.log(event.currentTarget.value);
                    setNewPassword(event.currentTarget.value);
                  }}
                />
              </Form.Field>

              <Form.Field required="true">
                <Input
                  className="password-form--inputConfirm"
                  type="password"
                  placeholder="Confirmer nouveau mot de passe"
                  value={confirmPassword}
                  onChange={(event) => {
                    // console.log(event.currentTarget.value);
                    setConfirmPassword(event.currentTarget.value);
                  }}
                />
              </Form.Field>
              {passwordError && (
              <Message negative>
                <Message.Header>
                  Les mots de passe doivent être identiques et les champs ne peuvent être vides
                </Message.Header>
              </Message>
              )}
              {passwordPatchMessage && (
              <Message positive>
                <Message.Header>
                  La modification a bien été prise en compte
                </Message.Header>
              </Message>
              )}
              <Button
                type="submit"
                className="modal-save"
              >
                Changer votre mot de passe
              </Button>
            </Form>
            )}
          actions={['Retour']}
        />
      </Grid.Column>
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
  newPassword: PropTypes.string.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  handleUsernameSubmit: PropTypes.func.isRequired,
  handleEmailSubmit: PropTypes.func.isRequired,
  handlePasswordSubmit: PropTypes.func.isRequired,
  handleUsernameError: PropTypes.func.isRequired,
  toggleUsernameError: PropTypes.func.isRequired,
  handleEmailError: PropTypes.func.isRequired,
  toggleEmailError: PropTypes.func.isRequired,
  usernameError: PropTypes.bool.isRequired,
  emailError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
  usernameToDisplay: PropTypes.string.isRequired,
  avatarToDisplay: PropTypes.string.isRequired,
  emailToDisplay: PropTypes.string.isRequired,
  usernamePatchMessage: PropTypes.bool.isRequired,
  emailPatchMessage: PropTypes.bool.isRequired,
  passwordPatchMessage: PropTypes.bool.isRequired,
  handlePasswordError: PropTypes.func.isRequired,
  togglePasswordError: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Profilepage;
