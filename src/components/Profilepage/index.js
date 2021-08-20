import React from 'react';
import {
  Button,
  Form,
  Image,
  Popup,
  Modal } from 'semantic-ui-react';

import './profilepage.scss';
import PropTypes from 'prop-types';
import Password from './Password';
import Avatar from './intel.jpg';

const Profilepage = ({ open }) => (
  <div className="Profilepage-main">
    <h2 className="Profilepage-NexusUsername">
      Flandwich 666
    </h2>
    <div className="Profilepage-avatar">
      <Image src={Avatar} size="medium" circular centered />
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
    <Form>
      <Form.Field className="Profilepage-username">
        <label>Username</label>
        <input className="Profilepage-username--input" placeholder="Nouvel identifiant Nexus" />
      </Form.Field>
      <Form.Field className="Profilepage-email">
        <label>Email</label>
        <input className="Profilepage-email--input" type="email" placeholder="Nouvelle adresse mail" />
        <input className="Profilepage-email--inputConfirm" type="email" placeholder="Confirm Nouvelle adresse mail" />
      </Form.Field>
      <div className="Profilepage-buttonsgroup">
        <Button onClick={open} type="submit">Enregistrer</Button>
        <Modal trigger={<Button>Content</Button>} />
        {/* <Popup
          content={<Password />}
          on="click"
          offset={[0, 0]}
          trigger={<Button type="button">Modifier le mot de passe</Button>}
        /> */}
      </div>
    </Form>
  </div>

);

Profilepage.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Profilepage;
