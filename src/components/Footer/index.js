import React from 'react';
// import de composants semantic-ui
import { NavLink } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer-list">
      <NavLink to="/CGU">
        <li className="footer-list-item">CGU</li>
      </NavLink>
      <NavLink to="/team">
        <li className="footer-list-item">L'équipe</li>
      </NavLink>
      <NavLink to="/contact" exact>
        <li className="footer-list-item">Contact</li>
      </NavLink>
      <NavLink to="/FAQ">
        <li className="footer-list-item">FAQ</li>
      </NavLink>
    </ul>
  </footer>
);

export default Footer;
