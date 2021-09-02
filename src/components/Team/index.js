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

const Team = () => (
  <Grid className="team-container" centered stackable style={{ height: '100vh', overflow: 'auto' }} divided>
    <Grid.Row>
      <Header as='h1' textAlign='center' style={{color:'white', paddingBottom: '8rem', paddingTop: '8rem'}}>L'équipe de développement du Nexus</Header>
    </Grid.Row>
    <Grid.Row columns={5}>
      <Grid.Column width={4} className="team-developper">
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
      <Grid.Column width={4} className="team-developper">
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
      <Grid.Column width={4} className="team-developper">
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
    </Grid.Row>
    <Grid.Row columns={2}>
    <Grid.Column width={4} className="team-developper">
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
      <Grid.Column width={4} className="team-developper">
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
      
    </Grid.Row>
      <Grid.Row>
        <Link to='/'>
          <div className='Team-linkToHome'>Retour à l'accueil</div>
        </Link>
      </Grid.Row>
  </Grid>
);

export default Team;
