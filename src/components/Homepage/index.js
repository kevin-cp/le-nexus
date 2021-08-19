import React from 'react';

// semantic ui import
import { Grid, Segment, Header, Card, Image, Dropdown, For, Form, Button } from 'semantic-ui-react';

import Avatar from './intel.jpg'

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
       
      <div className="homepage-friendCardsList">
          <Header className="friendCardsList-header" as="h2" textAlign="center" content="Amis possédant ce jeu" />
          <Grid columns={2} stackable>
            <Grid.Column>
              <Card className="friendCard-element">
                <Card.Content>
                  <Image
                    className="friendCard-picture"
                    floated="left"
                    size="small"
                    src={Avatar}
                  />
                  <Card.Header className="friendCard-nexusTag">Nexus gamer tag</Card.Header>
                  <Card.Meta className="friendCard-steamTag">Steam gamer tag</Card.Meta>
                  <Card.Meta className="friendCard-currentMood"> Mood séléctionné</Card.Meta>                 
                  <Button className="friendCard-button">
                    Proposer une partie
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card className="friendCard-element">
                <Card.Content>
                  <Image
                    className="friendCard-picture"
                    floated="left"
                    size="small"
                    src={Avatar}
                  />
                  <Card.Header className="friendCard-nexusTag">Nexus gamer tag</Card.Header>
                  <Card.Meta className="friendCard-steamTag">Steam gamer tag</Card.Meta>
                  <Card.Meta className="friendCard-currentMood"> Mood séléctionné</Card.Meta>
                  <Button className="friendCard-button">
                    Proposer une partie
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card className="friendCard-element">
                <Card.Content>
                  <Image
                    className="friendCard-picture"
                    floated="left"
                    size="small"
                    src={Avatar}
                  />
                  <Card.Header className="friendCard-nexusTag">Nexus gamer tag</Card.Header>
                  <Card.Meta className="friendCard-steamTag">Steam gamer tag</Card.Meta>
                  <Card.Meta className="friendCard-currentMood"> Mood séléctionné</Card.Meta>
                  <Button className="friendCard-button">
                    Proposer une partie
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card className="friendCard-element">
                <Card.Content>
                  <Image
                    className="friendCard-picture"
                    floated="left"
                    size="small"
                    src={Avatar}
                  />
                  <Card.Header className="friendCard-nexusTag">Nexus gamer tag</Card.Header>
                  <Card.Meta className="friendCard-steamTag">Steam gamer tag</Card.Meta>
                  <Card.Meta className="friendCard-currentMood"> Mood séléctionné</Card.Meta>
                  <Button className="friendCard-button">
                    Proposer une partie
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card className="friendCard-element">
                <Card.Content>
                  <Image
                    className="friendCard-picture"
                    floated="left"
                    size="small"
                    src={Avatar}
                  />
                  <Card.Header className="friendCard-nexusTag">Nexus gamer tag</Card.Header>
                  <Card.Meta className="friendCard-steamTag">Steam gamer tag</Card.Meta>
                  <Card.Meta className="friendCard-currentMood"> Mood séléctionné</Card.Meta>
                  <Button className="friendCard-button">
                    Proposer une partie
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card className="friendCard-element">
                <Card.Content>
                  <Image
                    className="friendCard-picture"
                    floated="left"
                    size="small"
                    src={Avatar}
                  />
                  <Card.Header className="friendCard-nexusTag">Nexus gamer tag</Card.Header>
                  <Card.Meta className="friendCard-steamTag">Steam gamer tag</Card.Meta>
                  <Card.Meta className="friendCard-currentMood"> Mood séléctionné</Card.Meta>
                  <Button className="friendCard-button">
                    Proposer une partie
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Homepage;
