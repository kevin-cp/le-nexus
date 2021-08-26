import React from 'react';
import { Button, Image, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './profile.scss';

const Profile = ({ avatar, pseudo, handleDisconnection }) => (
  <div className="profile-popup">
    <Image className="avatar" src={avatar} avatar />
    <p className="profile-username">{pseudo}</p>
    <NavLink
      to="/profile"
      exact
    >
      <Menu.Item
        className="nav-item"
        name="Edition-profil"
      >
        Editer le profil
      </Menu.Item>
    </NavLink>
    <Button onClick={handleDisconnection}>Se Déconnecter</Button>
  </div>

);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  handleDisconnection: PropTypes.func.isRequired,
};

export default Profile;
