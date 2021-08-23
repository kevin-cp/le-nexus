// == Import npm
import React from 'react';
import Homepage from 'src/containers/Homepage';
import Profilepage from 'src/containers/Profilepage';
import Eventpage from 'src/components/Eventpage';
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import SignInForm from 'src/containers/SignInForm';

// == Import

import './app.scss';

// == Composant
const App = () => (
  <Container fluid>
    <div className="app">
      {/* <SignInForm /> */}
      <Nav />
      <Switch>
        <Route path="/events">
          <Eventpage />
        </Route>
        <Route path="/profile">
          <Profilepage />
        </Route>
        <Route path="/signin">
          <SignInForm />
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
