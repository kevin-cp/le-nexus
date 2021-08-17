// == Import npm
import React from 'react';
import Homepage from 'src/components/Homepage';

import {Container} from 'semantic-ui-react';

// == Import

import './app.scss';

// == Composant
const App = () => (
  <Container fluid>
      <div className="app">
        <Homepage />
      </div>
  </Container>
);

// == Export
export default App;
