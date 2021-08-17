import React from 'react';

// semantic ui import
import { Grid, Segment, Card, Image } from 'semantic-ui-react';

import './homepage.scss';

const Homepage = () => (
  <Grid stackable>
    <Grid.Row columns={2}>
      <Grid.Column>
          Profil du joueur
        <div className="liste-jeux">
          Liste de jeux
          <Grid columns={3} doubling>
            <Grid.Column>
              Test
            </Grid.Column>
            <Grid.Column>
              Test
            </Grid.Column>
            <Grid.Column>
              Test
            </Grid.Column>
            <Grid.Column>
              Test
            </Grid.Column>
          </Grid>
        </div>

      </Grid.Column>
      <Grid.Column>

        Amis possédants ce jeux
        <Grid columns={3} stackable>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Image
                  floated='left'
                  size='mini'
                  src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Image
                  floated='left'
                  size='mini'
                  src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Image
                  floated='left'
                  size='mini'
                  src='/images/avatar/large/steve.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Homepage;
