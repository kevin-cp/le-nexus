/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Loader } from 'semantic-ui-react';

import './loginform.scss';

const LoginForm = ({ email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  loginError,
  isLogged,
  launchLoading,
  isLoading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();

    // ON lance le loading
    launchLoading(true);
  };

  // SI login correct, donc changement state pour loginsuccessfull alors on redirige vers page principale
  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    // Ici on met en place le loader
    <>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Connectez-vous
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
            fluid
            icon='user'
            iconPosition='left'
            placeholder='E-mail'
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
            />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />

          <Button color='teal' fluid size='large'>
            {isLoading && (
              <Loader active inline />
            )}
            {!isLoading && (
              <div>Login</div>
            )}
          </Button>
        </Segment>
      </Form>
      <Message>
        Nouveau parmi nous ? <a href="/signin">Inscrivez-vous</a>
      </Message>
        {loginError && (
        <Message
          error
          header="Impossible de se connecter"
          content="Veuillez vérifier votre email/mot de passe"
        />
      )}
    </Grid.Column>
  </Grid>
  </>
  );
};

export default LoginForm;
