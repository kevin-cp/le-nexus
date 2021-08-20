// == Import npm
import React from 'react';
import Homepage from 'src/containers/Homepage';
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import { Container } from 'semantic-ui-react';
import SignInForm from 'src/containers/SignInForm';

// == Import

import './app.scss';

// == Composant
const App = () => (
  <Container fluid>
    <div className="app">
      <Nav />
      <Homepage />
      <Footer />
    </div>
  </Container>
);

// == Export
export default App;
