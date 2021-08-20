import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import './loginform.scss';

import NexusLogo from 'src/assets/images/Nexus-logo-big-black.PNG';

const LoginForm = ({ email, password, setEmail, setPassword }) => (

  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Connectez-vous
      </Header>
      <Form size='large'>
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
    </Grid.Column>
  </Grid>
)

export default LoginForm
