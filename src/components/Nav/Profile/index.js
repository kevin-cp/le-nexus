import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './profile.scss';

const Profile = ({ avatar, pseudo, handleDisconnection }) => (
  <div className="profile-popup">
    <Image className="avatar" src={avatar} avatar />
    <p className="profile-username">{pseudo}</p>
    <a href="#">Editer le profil</a>
    <Button onClick={handleDisconnection}>Se Déconnecter</Button>
  </div>

);

export default Profile;
