import React from 'react';
import {
  Menu,
  Input,
  Image,
  Popup,
} from 'semantic-ui-react';
import Profile from './Profile';

import 'semantic-ui-css/semantic.min.css';
import './nav.scss';

const Nav = () => (
  <Menu stackable className="navbar">
    <Input placeholder="Search Friends" />
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
      content={<Profile />}
      on="click"
      offset={[0, 20]}
      position="top right"
      trigger={<Image className="avatar" src="#" avatar />}
    />
  </Menu>
);

export default Nav;
