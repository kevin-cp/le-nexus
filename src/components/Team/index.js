import React from 'react';
import {
  Card,
  Image,
  Grid,
} from 'semantic-ui-react';
import './team.scss';

const Team = () => (
  <Grid className="team-container" stackable textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 600 }}>
      <Card.Group className="team-card-group" stackable itemsPerRow={2}>
        <Card>
          <Card.Content>
            <Image
              floated='right'
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
        <Card>
          <Card.Content>
            <Image
              floated='right'
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
        <Card>
          <Card.Content>
            <Image
              floated='right'
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
        <Card>
          <Card.Content>
            <Image
              floated='right'
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
        <Card>
          <Card.Content>
            <Image
              floated='right'
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
      </Card.Group>
    </Grid.Column>
  </Grid>
);

export default Team;
