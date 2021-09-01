/* eslint-disable max-len */
import React from 'react';
// import de composants semantic-ui
import { NavLink, Link } from 'react-router-dom';

import NexuslogoNav from 'src/assets/images/Nexus-logo-nav.png';

import {
  Menu,
  Image,
  Popup,
  Input,
  Button,
  Icon,
  List,
  Modal,
  Header,
  Form,
  Label,
} from 'semantic-ui-react';

import PropTypes from 'prop-types';
// import du sous composant pour le popup
import Profile from './Profile';
import 'semantic-ui-css/semantic.min.css';
import './nav.scss';

const Nav = ({
  steamAvatar,
  pseudo,
  handleDisconnection,
  inputSearch,
  setInputSearch,
  isSearching,
  handleIsSearching,
  handleIsNotSearching,
  handleFriendSearch,
  resultList,
  handleFriendRequest,
  handleFriendToRequestId,
  handleSearchNotification,
  hasNotification,
  friendRequests,
  handleAcceptFriendRequest,
  handleDenyFriendRequest,
  handleRequestId,
  handleHasNoNotification,
  numberOfnotifications,
  role,
  friendsList,
}) => {
  // Si il y a un résultat lors de la recherche on affiche la div de résultat
  if (inputSearch.length > 0 && resultList.length > 0) {
    handleIsSearching();
  }
  else {
    handleIsNotSearching();
  }

  // je créé ces 2 fonctions afin de pouvoir les utiliser dans un seul onclick
  const handleAddFriendClick = (id) => {
    handleFriendToRequestId(id);
  };

  const handleSendFriendRequest = () => {
    handleFriendRequest();
  };

  // je stocke la liste d'amis dans une variable que je vais utiliser
  // pour faire un affichage conditionnel du bouton de modal d'ajout d'amis
  // en utilisant un .includes()
  const friends = friendsList.map((item) => item.pseudo);

  return (
    <Menu fixed="top" stackable id="navbar">
      <Menu.Item>
        <Image id="Nexus-logo-nav" size="mini" href="#" src={NexuslogoNav} />
      </Menu.Item>
      {/* div qui regroupe la barre de recherche et les résultats */}
      <div className="search-group">
        <Input
          placeholder="Search Friends"
          icon="search"
          className="nav-search"
          value={inputSearch}
          onChange={(event) => {
            setInputSearch(event.currentTarget.value);
            handleFriendSearch();
          }}
          onBlur={handleIsNotSearching}
        />
        {isSearching && (
        <div className="test">
          <List divided>
            {resultList.map((user) => (
              <List.Item key={user.id} className="listItem">
                <Image floated="left" size="mini" circular src={user.steamAvatar} />
                <List.Content>
                  <List.Header>{user.pseudo}</List.Header>
                  <Icon name="steam" /> {user.steamUsername}
                  {/* si les résultats de la recherche ne contiennent PAS un pseudo étant dans la liste d'ami
                    on affiche le modal pour ajouter un ami
                   */}
                  {!friends.includes(user.pseudo)
                    && (
                    <Modal
                      trigger={(
                        <Button
                          floated="right"
                          className="addFriend"
                          circular
                          inverted
                          color="blue"
                          size="tiny"
                          icon="add user"
                        />
                  )}
                    >
                      <Modal.Content image>
                        <Image size="medium" src={user.steamAvatar} wrapped />
                        <Modal.Description>
                          <Header>{user.pseudo}</Header>
                          <Icon size="big" name="steam" /> {user.steamUsername}
                          <p>Voulez-vous ajouter {user.pseudo} en ami ?</p>
                        </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions>
                        <Form onSubmit={() => {
                          handleAddFriendClick(user.id);
                          handleSendFriendRequest();
                          handleIsNotSearching();
                        }}
                        >
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              handleIsNotSearching();
                            }}
                            color="red"
                          >
                            <Icon name="remove" /> Non
                          </Button>
                          <Button
                            type="submit"
                            color="green"
                          >
                            <Icon name="checkmark" /> Oui
                          </Button>
                        </Form>
                      </Modal.Actions>
                    </Modal>
                    )}

                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
        )}
      </div>
      <NavLink
        to="/"
        exact
      >
        <Menu.Item
          className="nav-item"
          name="Accueil"
        >
          Accueil
        </Menu.Item>
      </NavLink>
      {role === 'ROLE_ADMIN'
      && (
      <Menu.Item>
        <a
          className="backOffice-link"
          href="http://localhost:8000/back/user/"
          target="_blank"
          rel="noreferrer"
        >
          Admin Back-office
        </a>
      </Menu.Item>
      )}

      <Popup
      // le content est ce que le popup affiche au clic, il s'agit ici du sous-composant profile
      // afin d'alléger le code ici
        content={(
          <Profile
            avatar={steamAvatar}
            pseudo={pseudo}
            acceptRequest={handleAcceptFriendRequest}
            denyRequest={handleDenyFriendRequest}
            hasNotif={hasNotification}
            friendRequest={friendRequests}
            handleDisconnection={handleDisconnection}
            requestId={handleRequestId}
            handleHasNoNotification={handleHasNoNotification}
          />
)}
        on="click"
        offset={[0, 0]}
      // dans trigger: l'avatar qui est affiché et cliquable
        trigger={<Image className="avatar" src={steamAvatar} size="tiny" avatar />}
      />
      {hasNotification && (
        <Label className="notification-label" circular color="red" key="red">
          {numberOfnotifications}
        </Label>
      )}
      {/* <Button
        icon
        onClick={handleSearchNotification}
      >
        <Icon name="sync" />
      </Button> */}
    </Menu>
  );
};

Nav.propTypes = {
  steamAvatar: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  handleDisconnection: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  isSearching: PropTypes.bool.isRequired,
  handleIsSearching: PropTypes.func.isRequired,
  handleIsNotSearching: PropTypes.func.isRequired,
  handleFriendSearch: PropTypes.func.isRequired,
  resultList: PropTypes.array.isRequired,
  handleFriendRequest: PropTypes.func.isRequired,
};

export default Nav;
