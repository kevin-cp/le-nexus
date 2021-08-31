import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, Icon } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

import './profile.scss';

const Profile = ({
  avatar,
  pseudo,
  handleDisconnection,
  friendRequest,
  hasNotif,
  acceptRequest,
  denyRequest,
  requestId,
  handleHasNoNotification,
  handleSearchNotification,
  handleUserData,
}) => {
  const handleAcceptFriendRequest = () => {
    acceptRequest();
  };

  const handleDenyFriendRequest = () => {
    denyRequest();
  };

  const handleNoNotif = () => {
    handleHasNoNotification();
  };

  const handleRequestId = (id) => {
    requestId(id);
  };

  const refreshNotification = () => {
    handleSearchNotification();
  };

  const refreshUserData = () => {
    handleUserData();
  };
  return (
    <div className="profile-popup">
      <Image className="avatar" src={avatar} avatar />
      <p className="profile-username">{pseudo}</p>
      {hasNotif
      && friendRequest.map((request) => (
        <div key={request.id} className="friend-request">
          <p>Demande en ami de <b>{request.sender.pseudo}</b> :</p>
          <Button onClick={() => {
            handleRequestId(request.id);
            handleAcceptFriendRequest();
            handleNoNotif();
          }}
          >Accepter
          </Button>
          <Button onClick={() => {
            handleRequestId(request.id);
            handleDenyFriendRequest();
            handleNoNotif();
          }}
          >
            Refuser
          </Button>
        </div>
      ))}
      <Button
                icon
                labelPosition='right'
                onClick={() => {
                  refreshNotification();
                  refreshUserData();
                }}> Raffraichir les données  <Icon name="sync" /></Button>
      <NavLink to="/profile">Editer le profil</NavLink>
      <Button onClick={handleDisconnection}>Se Déconnecter</Button>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  handleDisconnection: PropTypes.func.isRequired,
  friendRequest: PropTypes.string.isRequired,
  hasNotif: PropTypes.bool.isRequired,
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  handleDisconnection: PropTypes.func.isRequired,
};

export default Profile;
