/* eslint-disable max-len */
import React from 'react';
// import de composants semantic-ui
import { NavLink } from 'react-router-dom';

import NexuslogoNav from 'src/assets/images/Nexus-logo-nav.png';

import {
  Menu,
  Image,
  Popup,
  Input,
  Button,
  Icon,
  List,
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
  userList,
  isSearching,
  handleIsSearching,
  handleIsNotSearching,
}) => (
  <Menu fixed="top" stackable id="navbar">
    <Menu.Item>
      <Image id="Nexus-logo-nav" size="mini" href="#" src={NexuslogoNav} />
    </Menu.Item>
    <Input
      placeholder="Search Friends"
      icon="search"
      className="nav-search"
      value={inputSearch}
      onChange={(event) => {
        setInputSearch(event.currentTarget.value);
      }}
      onFocus={handleIsSearching}
      onBlur={handleIsNotSearching}
    />
    {isSearching && (
    <div className="test">
      <List divided>
        {userList.map((user) => (
          <List.Item className="listItem" fluid>
            <Image floated="left" size="mini" circular src={user.steamAvatar} />
            <List.Content>
              <List.Header>{user.pseudo}</List.Header>
              <Icon name="steam" /> {user.steamUsername}
              <Button floated="right" className="addFriend" circular inverted color="blue" size="tiny" icon="add user" />
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
    )}
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
    <NavLink
      to="/events"
    >
      <Menu.Item
        className="nav-item"
        name="Evenements"
      >
        Evenements
      </Menu.Item>
    </NavLink>
    {/* <NavLink
      to="/signin"
    >
      <Menu.Item
        className="nav-item"
        name="Inscription"
      >
        Inscription
      </Menu.Item>
    </NavLink>
    <NavLink
      to="/login"
    >
      <Menu.Item
        className="nav-item"
        name="Login"
      >
        Login
      </Menu.Item>
    </NavLink> */}
    <Popup
      // le content est ce que le popup affiche au clic, il s'agit ici du sous-composant profile
      // afin d'alléger le code ici
      content={<Profile avatar={steamAvatar} pseudo={pseudo} handleDisconnection={handleDisconnection} />}
      on="click"
      offset={[0, 0]}
      // dans trigger: l'avatar qui est affiché et cliquable
      trigger={<Image className="avatar" src={steamAvatar} size="tiny" avatar />}
    />
  </Menu>
);

Nav.propTypes = {
  steamAvatar: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  handleDisconnection: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  userList: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  handleIsSearching: PropTypes.func.isRequired,
  handleIsNotSearching: PropTypes.func.isRequired,
};

export default Nav;
