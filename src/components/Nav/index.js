import React from 'react';
// import de composants semantic-ui
import {
  Menu,
  Input,
  Icon,
  Popup,
} from 'semantic-ui-react';
// import du sous composant pour le popup
import Profile from './Profile';
import 'semantic-ui-css/semantic.min.css';
import './nav.scss';

const Nav = () => (
  <Menu stackable className="navbar">
    <Input placeholder="Search Friends" icon="search" />
    <Menu.Item
      name="Accueil"
    >
      Accueil
    </Menu.Item>
    <Menu.Item
      name="Evenements"
    >
      Evenements
    </Menu.Item>
    <Popup
      // le content est ce que le popup affiche au clic, il s'agit ici du sous-composant profile
      // afin d'alléger le code ici
      content={<Profile />}
      on="click"
      offset={[0, 20]}
      position="top right"
      // dans trigger: l'avatar qui est affiché et cliquable
      trigger={<Icon className="avatar" size="big" name="user circle" />}
    />
  </Menu>
);

export default Nav;
