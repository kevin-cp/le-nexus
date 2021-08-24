/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  TextArea,
} from 'semantic-ui-react';

import './contact.scss';

const Contact = () => (
  <Grid className="contact-container" stackable textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 600 }}>
      <Form className="contact-form" size="large">
        <Header as="h2" color="black" textAlign="center">
          Contact
        </Header>
        <Form.Field>
          <label>Votre email</label>
          <input placeholder="email" />
        </Form.Field>
        <Form.Field>
          <label>Votre pseudo</label>
          <input placeholder="Pseudo" />
        </Form.Field>
        <Form.Field>
          <label>Votre message</label>
          <TextArea placeholder="Votre message" />
        </Form.Field>
        <Button className="button-submit" type="submit">Envoyer</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default Contact;
