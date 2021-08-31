import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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

export default Profile;
