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
<<<<<<< HEAD
import LoginForm from 'src/containers/LoginForm';
=======
import Contact from 'src/components/Contact';
import Team from 'src/components/Team';
>>>>>>> origin/Kevin-Inscription-error-messages

// == Import

import './app.scss';

// == Composant
const App = ( isLogged ) => (
  <Container fluid>
    <div className="app">
      {/* <SignInForm /> */}
<<<<<<< HEAD
<<<<<<< HEAD
        <Switch>
          <Route path="/signin">
            <SignInForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          {isLogged && (
            <>
              <Nav />
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Footer />
            </>
          )}
        </Switch>
=======
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
=======
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
>>>>>>> origin/Kevin-Inscription-error-messages
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
      <Footer />
>>>>>>> origin/Armand-Profilepage-updated
    </div>
  </Container>
);

// == Export
export default App;
