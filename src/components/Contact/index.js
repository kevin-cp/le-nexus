/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  TextArea,
  Message,
} from 'semantic-ui-react';
import { messageSent } from '../../actions/contact';

import './contact.scss';

const Contact = ({
  emailValue,
  setEmailvalue,
  textValue,
  setTextValue,
  handleContactFormSubmit,
  messageSent,
}) => (
  <Grid className="contact-container" stackable textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column className="form" style={{ maxWidth: 600 }}>
      <Form className="contact-form" size="large" onSubmit={handleContactFormSubmit}>
        <Header as="h2" color="black" textAlign="center">
          Contact
        </Header>
        <Form.Field>
          <label>Votre email</label>
          <input
            type="email"
            placeholder="email"
            value={emailValue}
            onChange={(event) => {
            // console.log(event.currentTarget.value);
              setEmailvalue(event.currentTarget.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Votre message</label>
          <TextArea
            placeholder="Votre message"
            value={textValue}
            onChange={(event) => {
            // console.log(event.currentTarget.value);
              setTextValue(event.currentTarget.value);
            }}
          />
          {messageSent && (
            <Message
              positive
              header="Votre message a bien été envoyé"
              content="Nous y répondrons dans les plus bref délais"
            />
          )}
        </Form.Field>
        <Button className="button-submit" type="submit">Envoyer</Button>
      </Form>
      <Link to="/" className="homepage-button">
        Retour à l'accueil
      </Link>
    </Grid.Column>
  </Grid>
);

export default Contact;
