/* eslint-disable max-len */
import React from 'react';

// semantic ui import
import { Grid, Segment, Header, Card, Image, Dropdown, Form, Button } from 'semantic-ui-react';

import PropTypes from 'prop-types';

import Avatar from './intel.jpg';

import './homepage.scss';

const moodOptions = [
  { key: 1, text: 'PGM', value: 1, color: 'green' },
  { key: 2, text: 'Chill', value: 2, color: 'yellow' },
];

const Homepage = ({ 
  pseudo,
  steamUsername,
  steamAvatar,
  steamLibrary,
  gameSearch,
  searchGame,
}) => {
  //! De base la librairie affichera les 20 premiers jeux de la liste

  let filteredSteamLibrary = steamLibrary.slice(0, 20);

  //! Sinon la librairie affichera les jeux contenants les caractères de la recherche ET on slice pour limiter les recherches
  if (gameSearch.length !== 0) {
    filteredSteamLibrary = steamLibrary.filter((game) => {
      const inputSearchLowered = gameSearch.toLowerCase();
      const gameNameLowered = game.game.name.toLowerCase();

      return gameNameLowered.includes(inputSearchLowered);
    }).slice(0, 20);
  }

  return (
    <div className="Homepage">
    <Grid stackable>
      <Grid.Row columns={2}>
        <Grid.Column width={6}>
          <Segment.Group className="Homepage-profile">
            <Segment basic className="Homepage-profile--playerinfo">
              {/* Profil du joueur */}
              <Header className="Homepage-profile--playerinfo--username" as="h2" textAlign="center">{pseudo}</Header>
              <Image id="user-avatar" src={steamAvatar} size="small" floated="left" rounded />
              <Segment basic className='Homepage-profile--playerinfo--steamInfo'>
                <div>Pseudo Steam: {steamUsername}</div>
                <div>Status: Online </div>
                <div className='Homepage-profile--playerinfo--mood'>Humeur
                  <Dropdown clearable options={moodOptions} floating selection />
                </div>
              </Segment>
            </Segment>
            {/* Fin profil du joueur */}
            {/* Liste des jeux */}
            <Segment.Group className="Homepage-profile--playergames">
              <Form>
                <Form.Field>
                  <input
                    id="Homepage-profile--playergames--search"
                    placeholder="Search Games"
                    value={gameSearch}
                    onChange={(evt) => {
                      searchGame(evt.currentTarget.value);
                    }}
                  />
                </Form.Field>
              </Form>
              <Card.Group itemsPerRow={3}>

                {filteredSteamLibrary.map((game) => (
                  <Card>
                    <Image src={game.game.picture} wrapped />
                    <Card.Content>
                      <Card.Header>{game.game.name}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}

              </Card.Group>
            </Segment.Group>
            {/* Fin liste des jeux */}
          </Segment.Group>
        </Grid.Column>

        {/* Partie de droite */}

        <Grid.Column width={10}>

          <div className="homepage-friendCardsList">
            <Header className="friendCardsList-header" as="h2" textAlign="center" content="Amis possédants ce jeu : " />
            <Card.Group stackable itemsPerRow={3}>
                <Card className="friendCard-element">
                  <Card.Content>
                    <Image
                      className="friendCard-picture"
                      floated="left"
                      size="tiny"
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
                <Card className="friendCard-element">
                  <Card.Content>
                    <Image
                      className="friendCard-picture"
                      floated="left"
                      size="tiny"
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
                <Card className="friendCard-element">
                  <Card.Content>
                    <Image
                      className="friendCard-picture"
                      floated="left"
                      size="tiny"
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
                <Card className="friendCard-element">
                  <Card.Content>
                    <Image
                      className="friendCard-picture"
                      floated="left"
                      size="tiny"
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
                <Card className="friendCard-element">
                  <Card.Content>
                    <Image
                      className="friendCard-picture"
                      floated="left"
                      size="tiny"
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
                <Card className="friendCard-element">
                  <Card.Content>
                    <Image
                      className="friendCard-picture"
                      floated="left"
                      size="tiny"
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
            </Card.Group>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
  )
}

Homepage.propTypes = {
  pseudo: PropTypes.string.isRequired,
  steamUsername: PropTypes.string.isRequired,
  steamAvatar: PropTypes.string.isRequired,
};

export default Homepage;
