/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button,
  Form,
  Image,
  Popup,
  Modal,
  Grid,
  Container,
  Header,
  Label,
  Input,
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
  handleUsernameSubmit,
  handleEmailSubmit,
  handlePasswordSubmit,
  usernameError,
}) => {
  const handleSubmitUsername = (evt) => {
    evt.preventDefault();
    handleUsernameSubmit();
  };

  const handleSubmitEmail = (evt) => {
    evt.preventDefault();
    handleEmailSubmit();
    // if (newEmail === confirmEmail) {
    //   handleFormSubmit();
    // }
  };

  const handleSubmitPassword = (evt) => {
    evt.preventDefault();
    handlePasswordSubmit();
  };

  return (
    <Container
      className="main"
      style={{ paddingTop: '10em' }}
    >
      <Grid
        columns={2}
        centered
        stackable
      >
        <Grid.Column className="avatar" textAlign="center">
          <Header
            as="h1"
            className="nexusUsername"
          >
            {usernameToDisplay}
          </Header>
          <Image className="avatar-image" src={avatarToDisplay} size="medium" centered circular />
          <Popup
            className="avatar-popup"
            content={(
              <Form className="avatar-popup--form" onSubmit="">
                <Label>Nouvel avatar</Label>
                <Input className="popup-form--input" placeholder="chemin d'importation" />
                <Button className="popup-form--button" type="submit">Importer</Button>
              </Form>
          )}
            on="click"
            offset={[0, 0]}
            trigger={<Button className="popup-avatar--button" type="button" circular icon="settings" />}
          />
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Form
            className="mainform-username"
            onSubmit={handleSubmitUsername}
          >
            {/* {usernameError && (
          <Message negative>
            <Message.Header>Pseudo déjà existant</Message.Header>
          </Message>
          )} */}
            <Form.Field>
              <Label>Nouvel identifiant Nexus</Label>
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
            <Button type="submit">Enregistrer</Button>
          </Form>

          <Form
            className="mainform-email"
            onSubmit={handleSubmitEmail}
          >
            <Form.Field>
              <Label>Email</Label>
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

            <Form.Field>
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
            <Button type="submit">Enregistrer</Button>
          </Form>

          <Modal
            className="password-modal"
            header="Changement de mot de passe"
            trigger={<Button>Changer le mot de passe</Button>}
            content={(
              <Form
                className="password-form"
                onSubmit={handleSubmitPassword}
              >
                <Form.Field>
                  <Input
                    className="password-form--input"
                    type="password"
                    placeholder="Mot de passe actuel"
                    value={currentPassword}
                    onChange={(event) => {
                    // console.log(event.currentTarget.value);
                      setCurrentPassword(event.currentTarget.value);
                    }}
                  />
                </Form.Field>

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

                <Form.Field>
                  <Input
                    className="password-form--input"
                    type="password"
                    placeholder="Confirmer nouveau mot de passe"
                    value={confirmPassword}
                    onChange={(event) => {
                    // console.log(event.currentTarget.value);
                      setConfirmPassword(event.currentTarget.value);
                    }}
                  />
                </Form.Field>
                <Button type="submit">Enregistrer</Button>
              </Form>
            )}
            actions={['Retour']}
          />
        </Grid.Column>
      </Grid>
    </Container>
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
  handleUsernameSubmit: PropTypes.func.isRequired,
  handleEmailSubmit: PropTypes.func.isRequired,
  handlePasswordSubmit: PropTypes.func.isRequired,
  usernameError: PropTypes.bool.isRequired,
  usernameToDisplay: PropTypes.string.isRequired,
  avatarToDisplay: PropTypes.string.isRequired,
  emailToDisplay: PropTypes.string.isRequired,
};

export default Profilepage;
