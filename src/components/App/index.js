// == Import npm
import React from 'react';
import Homepage from 'src/containers/Homepage';
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import SignInForm from 'src/containers/SignInForm';
import Contact from 'src/components/Contact';
import Team from 'src/components/Team';

// == Import

import './app.scss';

// == Composant
const App = () => (
  <Container fluid>
    <div className="app">
      {/* <SignInForm /> */}
      <Nav />
      <Switch>
        <Route path="/signin">
          <SignInForm />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Container>
);

// == Export
export default App;
