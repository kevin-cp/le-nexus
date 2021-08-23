import React from 'react';
import {
  Button,
  Form,
  Image,
  Popup,
  Modal,
  Grid,
} from 'semantic-ui-react';

import './profilepage.scss';
import PropTypes from 'prop-types';
import Password from './Password';
import Avatar from './intel.jpg';

const Profilepage = ({
  newUsername,
  setNewUsername,
  newEmail,
  setNewEmail,
  confirmEmail,
  setConfirmEmail,
}) => (

  <Grid centered>
    <div className="Profilepage-main">
      <h2 className="Profilepage-NexusUsername">
        Flandwich 666
      </h2>
      <div className="Profilepage-avatar">
        <Image src={Avatar} circular />
        <Popup
          className="Profilepage-popup--import"
          content={(
            <Form.Field>
              <label>Nouvel avatar</label>
              <input className="Profilepage-popup--input" placeholder="chemin d'importation" />
              <Button className="Profilepage-popup--button" type="submit">Importer</Button>
            </Form.Field>
)}
          on="click"
          offset={[0, 0]}
          trigger={<Button className="Profilepage-avatar--button" type="button" circular icon="settings" />}
        />
      </div>
      <Form className="Profilepage-form">
        <Form.Field className="Profilepage-username">
          <label>Nouvel identifiant Nexus</label>
          <input
            type="text"
            className="Profilepage-username--input"
            placeholder="Nouvel identifiant"
            value={newUsername}
            onChange={(event) => {
              // console.log(event.currentTarget.value);
              setNewUsername(event.currentTarget.value);
            }}
          />
        </Form.Field>
        <Form.Field className="Profilepage-email">
          <label>Email</label>
          <input
            className="Profilepage-email--input"
            type="email"
            placeholder="Nouvelle adresse mail"
            value={newEmail}
            onChange={(event) => {
              // console.log(event.currentTarget.value);
              setNewEmail(event.currentTarget.value);
            }}
          />
          <input
            className="Profilepage-email--inputConfirm"
            type="email"
            placeholder="Confirm Nouvelle adresse mail"
            value={confirmEmail}
            onChange={(event) => {
              // console.log(event.currentTarget.value);
              setConfirmEmail(event.currentTarget.value);
            }}
          />

        </Form.Field>
        <div className="Profilepage-buttonsgroup">
          <Button type="submit">Enregistrer</Button>
          <Modal
            header="Changement de mot de passe"
            trigger={<Button>Changer le mot de passe</Button>}
            content={<Password />}
            actions={['Cancel']}
          />
        </div>
      </Form>
    </div>
  </Grid>

);

Profilepage.propTypes = {
  newUsername: PropTypes.string.isRequired,
  setNewUsername: PropTypes.func.isRequired,
  newEmail: PropTypes.string.isRequired,
  setNewEmail: PropTypes.func.isRequired,
  confirmEmail: PropTypes.string.isRequired,
  setConfirmEmail: PropTypes.func.isRequired,
};

export default Profilepage;
