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
import LoginForm from 'src/containers/LoginForm';
import Contact from 'src/containers/Contact';
import Team from 'src/components/Team';

// == Import

import './app.scss';

// == Composant
const App = (isLogged) => (
  <Container fluid>
    <div className="app">
      {/* <SignInForm /> */}
        <Switch>
          <Route path="/signin">
            <SignInForm />
            <Footer />
          </Route>
          <Route path="/login">
            <LoginForm />
            <Footer />
          </Route>
          <Route path="/events">
            <Eventpage />
            <Footer />
          </Route>
          <Route path="/profile">
            <Profilepage />
            <Footer />
          </Route>
          <Route path="/contact" exact>
            <Contact />
            <Footer />
          </Route>
          <Route path="/team" exact>
            <Team />
            <Footer />
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
    </div>
  </Container>
);

// == Export
export default App;
