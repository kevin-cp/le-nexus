/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link, NavLink } from 'react-router-dom';

import NexuslogoNav from 'src/assets/images/Nexus-logo-nav.png';

import {
  Button,
  Checkbox,
  Form,
  Message,
  Header,
  Grid,
  Image,
  Loader,
} from 'semantic-ui-react';

import './signinform.scss';

const SignInForm = ({
  username,
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
  isCreated,
  isLoading,
  launchLoading,
}) => {
  // dans le handleSubmit je fais une comparaison de mot de passe
  // si le mdp et la confirmation sont différents on aura un message sinon c'est ok
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (password === confirmPassword && isChecked === true) {
      togglePasswordError();
      handleFormSubmit();
      launchLoading(true);
    }
    else {
      handlePasswordError();
    }
  };

  if (isCreated) {
    return <Redirect to="/" />;
  }

  return (
    <Grid className="signin-container" stackable textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 600 }}>
        <Form className="signin-form" onSubmit={handleSubmit}>
          <Image className="logo" src={NexuslogoNav} />
          <Header color="grey" size="huge">Inscription</Header>
          <Form.Field>
            <label>Pseudo</label>
            <input
              required
              placeholder="Pseudo"
              type="text"
              value={username}
              onChange={(event) => {
                // console.log(event.currentTarget.value);
                setUsername(event.currentTarget.value);
              }}
            />
          </Form.Field>
          {/* Message qui s'affiche uniquement si le pseudo est déjà existant */}
          {usernameError && (
            <Message negative>
              <Message.Header>Pseudo déjà existant</Message.Header>
            </Message>
          )}
          <Form.Field>
            <label>e-mail</label>
            <input
              required
              placeholder="e-mail"
              type="email"
              value={email}
              onChange={(event) => {
              // console.log(event.currentTarget.value);
                setEmail(event.currentTarget.value);
              }}
            />
          </Form.Field>
          {/* Message qui s'affiche uniquement si l'email est déjà existant */}
          {emailError && (
            <Message negative>
              <Message.Header>E-mail déjà existant</Message.Header>
            </Message>
          )}
          <Form.Field>
            <label>Mot de passe</label>
            <input
              required
              placeholder="Mot de passe"
              type="password"
              value={password}
              onChange={(event) => {
              // console.log(event.currentTarget.value);
                setPassword(event.currentTarget.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirmer le mot de passe:</label>
            <input
              required
              placeholder="confirmer le mot de passe"
              type="password"
              value={confirmPassword}
              onChange={(event) => {
              // console.log(event.currentTarget.value);
                setConfirmPassword(event.currentTarget.value);
              }}
            />
          </Form.Field>
          {/* Message qui s'affiche uniquement si un des deux mots de passes sont erronés */}
          {passwordError && (
          <Message negative>
            <Message.Header>Les mots de passe doivent être identiques</Message.Header>
          </Message>
          )}
          <Form.Field>
            <label>Steam ID</label>
            <input
              required
              placeholder="Steam ID"
              type="number"
              value={SteamId}
              onChange={(event) => {
              // console.log(event.currentTarget.value);
                setSteamId(event.currentTarget.value);
              }}
            />
          </Form.Field>
          {/* Message qui s'affiche uniquement si le steamId est déjà existant */}
          {steamIdError && (
            <Message negative>
              <Message.Header>SteamId déjà existant ou invalide</Message.Header>
            </Message>
          )}
          {/* message explicatif pour la récupératuion d'id */}
          <Message info>
            <Message.Header>Pourquoi nous demandons votre ID Steam ?</Message.Header>
            <p>Cela va nous permettre de récupérer la liste de jeux de votre bibliothèque Steam, votre liste d'amis... Nous vous invitons à consulter notre <Link to='/FAQ'>FAQ</Link> à ce sujet</p>
            <Message.Header>Comment faire ?</Message.Header>
            <p>Nous avons rédigé un guide complet à ce sujet dans notre <Link to='/FAQ'>FAQ</Link> !
            </p>
          </Message>
          <Form.Field required>
            <Checkbox onClick={handleIsChecked} required label="J'accepte les CGU" />
          </Form.Field>
          {!isChecked && (
            <Message negative>
              <Message.Header>Il est nécessaire d'accepter les CGU pour utiliser le Nexus.</Message.Header>
            </Message>
          )}
          {isLoading && (
          <Button className="button-submit" loading>Loading</Button>
          )}
          {!isLoading && (
          <Button className="button-submit" type="submit"><div>Confirmer</div></Button>
          )}
          <NavLink className="button-cancel" to="/">Annuler</NavLink>
          <Message>
            Déjà inscrit ? <a href="/">Connectez-vous</a>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
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
  isChecked: PropTypes.bool.isRequired,
  handleIsChecked: PropTypes.func.isRequired,
  togglePasswordError: PropTypes.func.isRequired,
  isCreated: PropTypes.string.isRequired,
};

export default SignInForm;
