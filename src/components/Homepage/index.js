import React from 'react';

// semantic ui import
import {
  Grid, Header, Card, Image, Button,
} from 'semantic-ui-react';

import './homepage.scss';
import Avatar from './intel.jpg';

const Homepage = () => (
  <Grid stackable>
    <Grid.Row columns={2}>
      <Grid.Column width={6}>
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
