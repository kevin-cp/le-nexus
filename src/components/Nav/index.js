import React from 'react';
// import de composants semantic-ui
import {
  Menu,
  Input,
  Image,
  Popup,
} from 'semantic-ui-react';
// import du sous composant pour le popup
import Profile from './Profile';
import 'semantic-ui-css/semantic.min.css';
import './nav.scss';
import Avatar from './avatar.jpg';

const Nav = () => (
  <Menu stackable id="navbar">
    <Input placeholder="Search Friends" icon="search" className="nav-search" />
    <Menu.Item
      className="nav-item"
      name="Accueil"
    >
      Accueil
    </Menu.Item>
    <Menu.Item
      className="nav-item"
      name="Evenements"
    >
      Evenements
    </Menu.Item>
    <Popup
      // le content est ce que le popup affiche au clic, il s'agit ici du sous-composant profile
      // afin d'alléger le code ici
      content={<Profile />}
      on="click"
      offset={[0, 0]}
      // dans trigger: l'avatar qui est affiché et cliquable
      trigger={<Image className="avatar" src={Avatar} size="tiny" avatar />}
    />
  </Menu>
);

export default Nav;
