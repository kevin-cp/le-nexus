import React from 'react';
import {
  Card,
  Image,
  Grid,
  Icon,
  Header,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import './team.scss';

import Tatayoyoavatar from 'src/assets/images/devteam/Tatayoyo.jpg';
import Armandavatar from 'src/assets/images/devteam/Armand.jpg';
import Julienavatar from 'src/assets/images/devteam/Julien.png';
import Kevinavatar from 'src/assets/images/devteam/Kevin.jpg';
import Florianavatar from 'src/assets/images/devteam/Florian.jpg';

const Team = () => (
  <Grid className="team-container" centered relaxed stackable style={{ height: '100vh', overflow: 'auto', marginLeft: '2rem' }}>
    <Grid.Row>
      <Header className="team-container--header" as='h1' textAlign='center' style={{color:'white', paddingBottom: '8rem', paddingTop: '8rem', fontSize: '5rem' }}>L'équipe de développement du Nexus</Header>
    </Grid.Row>
    <Grid.Row columns={5}>
      <Grid.Column className="team-developper">
        <Card>
          <Image src={Tatayoyoavatar} size='medium' />
          <Card.Content>
            <Card.Header>François Dzuidzia</Card.Header>
            <Card.Meta><Icon name="steam" color="black" /> : Tatayoyo </Card.Meta>
            <Card.Description>Front Developper - Product Owner</Card.Description>
          </Card.Content>
          <Card.Content>
          <Card.Meta>Jeux favoris:</Card.Meta>
          <Card.Description>Stellaris, Half-life, Cyberpunk 2077, Amnesia, Léa Passion Cheval</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column className="team-developper">
        <Card>
          <Image src={Kevinavatar} size='medium' />
          <Card.Content>
            <Card.Header>Kevin Capitao Peixoto</Card.Header>
            <Card.Meta><Icon name="steam" color="black" /> : t3sseract </Card.Meta>
            <Card.Description>Front Developper - Lead Dev Front</Card.Description>
          </Card.Content>
          <Card.Content>
          <Card.Meta>Jeux favoris:</Card.Meta>
          <Card.Description>Half-Life 2, Silent HIll 2, Skyrim, Fallout: New Vegas, Resident Evil 4</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column className="team-developper">
        <Card>
          <Image src={Armandavatar} size='medium' />
          <Card.Content>
            <Card.Header>Armand Ramière</Card.Header>
            <Card.Meta><Icon name="steam" color="black" /> : armandramiere </Card.Meta>
            <Card.Description>Front Developper - Scrum Master</Card.Description>
          </Card.Content>
          <Card.Content>
          <Card.Meta>Jeux favoris:</Card.Meta>
          <Card.Description>DOOM, Skyrim, Red Dead Redemption, Mass Effect, Ace Combat </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column className="team-developper">
        <Card>
          <Image src={Florianavatar} size='medium' />
          <Card.Content>
            <Card.Header>Florian Langard</Card.Header>
            <Card.Meta><Icon name="steam" color="black" /> : flandwich </Card.Meta>
            <Card.Description>Back Developper - Git Master</Card.Description>
          </Card.Content>
          <Card.Content>
          <Card.Meta>Jeux favoris:</Card.Meta>
          <Card.Description>No Man's Sky, No Man's Sky, No Man's Sky, No Man's Sky, Star Citizen</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column className="team-developper">
        <Card>
          <Image src={Julienavatar} size='medium' />
          <Card.Content>
            <Card.Header>Julien Gassman</Card.Header>
            <Card.Meta><Icon name="steam" color="black" /> : Je suis un intrus, j'ai pas de pc </Card.Meta>
            <Card.Description>Back Developper - Lead Dev Back</Card.Description>
          </Card.Content>
          <Card.Content>
          <Card.Meta>Jeux favoris:</Card.Meta>
          <Card.Description>Nier: Automata, Horizon: Zero Dawn, Nintendogs, Apex Legends, Monopoly: Mario Kart Edition</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Link to='/'>
          <div className='Team-linkToHome'>Retour à l'accueil</div>
        </Link>
      </Grid.Row>
      
  </Grid>
);

export default Team;
