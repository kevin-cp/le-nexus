import React from 'react';

// semantic ui import
import { Grid, Segment, Header, Card, Image, Dropdown, For, Form } from 'semantic-ui-react';

import './homepage.scss';

const moodOptions = [
  { key: 1, text: 'PGM', value: 1, color: 'green' },
  { key: 2, text: 'Chill', value: 2, color: 'yellow' },
];

const Homepage = () => (
  // Partie de gauche
  <Grid stackable>
    <Grid.Row columns={2}>
      <Grid.Column width={6}>
        <Segment.Group className="Homepage-profile">
          <Segment basic className="Homepage-profile--playerinfo">
        {/* Profil du joueur */}
            <Header className="Homepage-profile--playerinfo--username" as="h2" textAlign="center">Monsieur Yoyo</Header>
              <Image id="user-avatar" src="https://avatarfiles.alphacoders.com/161/161326.png" size="small" floated="left" rounded />
              <Segment basic className='Homepage-profile--playerinfo--steamInfo'>
                <div>Pseudo Steam: Tartalognon</div>
                <div>Status: Online </div>
              <div className='Homepage-profile--playerinfo--mood'>Humeur
              <Dropdown clearable options={moodOptions} floating selection/>
              </div>
              </Segment>
          </Segment>
        {/* FIn profil du joueur */}
          {/* Liste des jeux */}
          <Segment.Group className="Homepage-profile--playergames">
              <Form>
                <Form.Field>
                  <input id="Homepage-profile--playergames--search" placeholder="Search Games"/>
                </Form.Field>
              </Form>
            <Card.Group itemsPerRow={3}>
                <Card>
                  <Image src="http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg" wrapped />
                  <Card.Content>
                    <Card.Header>Team Fortress 2</Card.Header>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src="http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg" wrapped />
                  <Card.Content>
                    <Card.Header>Team Fortress 2</Card.Header>
                  </Card.Content>
                </Card>
                <Card>
                  <Image src="http://media.steampowered.com/steamcommunity/public/images/apps/440/07385eb55b5ba974aebbe74d3c99626bda7920b8.jpg" wrapped />
                  <Card.Content>
                    <Card.Header>Team Fortress 2</Card.Header>
                  </Card.Content>
                </Card>
            </Card.Group>
        </Segment.Group>
      {/* Fin liste des jeux */}
        </Segment.Group>
      </Grid.Column>

{/* Partie de droite */}

      <Grid.Column width={10}>

        Amis possédants ce jeux
        <Grid columns={3} stackable>
          <Grid.Column>

            {/* Cards */}

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

          {/* Fin d'une card */}

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
