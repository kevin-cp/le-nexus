import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './profile.scss';

const Profile = ({ avatar, pseudo }) => (
  <div className="profile-popup">
    <Image className="avatar" src={avatar} avatar />
    <p className="profile-username">{pseudo}</p>
    <NavLink
      to="/profile"
    >
      Editer le profil
    </NavLink>
    <Button>Se Déconnecter</Button>
  </div>

);

export default Profile;
