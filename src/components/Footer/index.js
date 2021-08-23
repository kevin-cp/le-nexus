import React from 'react';
// import de composants semantic-ui
import { NavLink } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer-list">
      <li className="footer-list-item"><a>CGU</a></li>
      <li className="footer-list-item"><a>L'équipe</a></li>
      <NavLink to="/contact">
        <li className="footer-list-item"><a>Contact</a></li>
      </NavLink>
      <li className="footer-list-item"><a>FAQ</a></li>
    </ul>
  </footer>
);

export default Footer;
