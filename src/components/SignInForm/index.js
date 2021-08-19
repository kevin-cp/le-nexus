import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Message,
  Header,
  Grid,
} from 'semantic-ui-react';

import './signinform.scss';

const SignInForm = () => (
  <Grid className="signin-container" stackable textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 600 }}>
      <Header color="grey" size="huge">Inscription</Header>
      <Form className="signin-form">
        <Form.Field>
          <label>Pseudo</label>
          <input placeholder="Pseudo" />
        </Form.Field>
        <Form.Field>
          <label>e-mail</label>
          <input placeholder="e-mail" />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe</label>
          <input placeholder="Mot de passe" />
        </Form.Field>
        <Form.Field>
          <label>Confirmer le mot de passe:</label>
          <input placeholder="confirmer le mot de passe" />
        </Form.Field>
        <Form.Field>
          <label>Steam ID</label>
          <input placeholder="Steam ID" />
        </Form.Field>
        <Message info>
          <Message.Header>Pouquoi nous demandons ton ID Steam ?</Message.Header>
          <p>Cela va nous permettre d'afficher la liste de jeux de ta bibliothèque etc..</p>
          <Message.Header>Comment faire ?</Message.Header>
          <p>C'est simple, sur le client Steam clique sur ton profil
            en haut a droite et sur <b>"Détails du compte"</b>.
            Juste en dessous du nom de ton compte se trouve l'ID !
          </p>
        </Message>
        <Form.Field>
          <Checkbox label="J'accepte les CGU" />
        </Form.Field>
        <Button className="button-submit" type="submit">Confirmer</Button>
        <Button className="button-cancel" type="submit">Annuler</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignInForm;
