/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import './loginform.scss';

import NexusLogo from 'src/assets/images/Nexus-logo-big-black.PNG';



const LoginForm = ({ email, password, setEmail, setPassword, handleLogin, loginError, loginSuccessfull }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  // SI login correct, donc changement state pour loginsuccessfull alors on redirige vers page principale
if (loginSuccessfull) {
  return <Redirect to="/" />;
}

  return (
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
            Login
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
  );
};

export default LoginForm;
