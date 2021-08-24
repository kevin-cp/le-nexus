/* eslint-disable max-len */
import React from 'react';
// import de composants semantic-ui
import { NavLink } from 'react-router-dom';

import NexuslogoNav from 'src/assets/images/Nexus-logo-nav.png';

import {
  Menu,
  Input,
  Image,
  Popup,
} from 'semantic-ui-react';

import PropTypes from 'prop-types';
// import du sous composant pour le popup
import Profile from './Profile';
import 'semantic-ui-css/semantic.min.css';
import './nav.scss';

const Nav = ({ steamAvatar, pseudo, handleDisconnection }) => (
  <Menu fixed="top" stackable id="navbar">

    <Menu.Item>
      <Image id="Nexus-logo-nav" size="mini" href="#" src={NexuslogoNav} />
    </Menu.Item>
    <Input placeholder="Search Friends" icon="search" className="nav-search" />
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
    <NavLink
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
    </NavLink>
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
};

export default Nav;
