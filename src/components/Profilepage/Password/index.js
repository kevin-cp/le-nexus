import React from 'react';
import { Form, Button } from 'semantic-ui-react';

import './password.scss';

const Password = () => (
  <Form.Field className="Password-form">
    <input className="Password-form--input" type="email" placeholder="Nouveau mot de passe" />
    <input className="Password-form--inputConfirm" type="email" placeholder="Confirmer nouveau mot de passe" />
    <Button className="Password-form--button" type="submit">Enregistrer</Button>
  </Form.Field>
);

export default Password;
