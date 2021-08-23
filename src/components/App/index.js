// == Import npm
import React from 'react';
import Homepage from 'src/containers/Homepage';
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import SignInForm from 'src/containers/SignInForm';
import LoginForm from 'src/containers/LoginForm';

// == Import

import './app.scss';

// == Composant
const App = ( isLogged ) => (
  <Container fluid>
    <div className="app">
      {/* <SignInForm /> */}
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
    </div>
  </Container>
);

// == Export
export default App;
