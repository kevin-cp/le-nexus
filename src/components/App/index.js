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
import Contact from 'src/components/Contact';
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
            <Nav />
            <Eventpage />
            <Footer />
          </Route>
          <Route path="/contact" exact>
            <Nav />
            <Contact />
            <Footer />
          </Route>
          <Route path="/team" exact>
            <Nav />
            <Team />
            <Footer />
          </Route>
          {isLogged && (
            <>
              <Route path="/" exact>
                <Nav />
                <Homepage />
              </Route>
              <Route path="/profile">
                <Nav />
                <Profilepage />
                <Footer />
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
