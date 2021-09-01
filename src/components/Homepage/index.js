/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import React, { useRef } from 'react';

// semantic ui import
import { Grid, Segment, Header, Card, Image, Dropdown, Form, Button, Icon, Popup, Divider } from 'semantic-ui-react';

import { Redirect, Link } from 'react-router-dom';

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
  filteredFriends,
  resetFriendList,
  addFriendToFilter,
  displayAllFriends,
  noFriendsFound,
  foundFriends,
  didntFindFriends,
  gameSearch,
  searchGame,
  friendsList,
  isLogged,
  visibilityState,
}) => {
  const friendHeaderRef = useRef(null)

  //! ========================FILTRE JEUX====================================
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
//! =========================================================================
//! =============================FILTRE AMIS=====================================
  const filteredFriendsList = filteredFriends;

  const handleGameClick = (evt) => {
    // ON commence par reset la friendList pour que l'affichage soit dynamique
    resetFriendList();
    const gameName = evt.currentTarget.querySelector(".header").innerText;
    // On définit le message de base si on ne trouve rien
    friendHeaderRef.current.innerText = `Aucun de vos amis ne possède ${gameName}`;
    // On cherche dans les librairies de chaque ami...
    //! Pour chaque ami...
    for (const friend of friendsList) {
      // On obtient 4 objets friend contenant les données dont librairies de chaque ami
      // Je veux dans chacune de ces librairies chercher (find) s'il y a gameName dans le nom d'un jeu (game.game.name)
      const found = friend.libraries.find((game) => game.game.name == gameName );
      if (typeof found !== 'undefined') {
        // SI TROUVÉ, ON AJOUTE L'AMI A LA LISTE FILTEREDFRIENDS APRES AVOIR RESET LA LISTE D'AMIS POUR EVITER LES DOUBLONS
        addFriendToFilter(friend);
        // On change le header de la liste d'amis
        friendHeaderRef.current.innerText = `Amis possédant ${gameName}`;
      }
    }
    if (friendHeaderRef.current.innerText === `Aucun de vos amis ne possède ${gameName}`) {
      // Fonction qui change le header de la page d'amis si aucun jeu en commun
      didntFindFriends();
    }
    else {
      // Fonction qui change le header de la page d'ami si jeu en commun 
      foundFriends();
    }
  };

  //! ============================AFFICHER TOUS LES AMIS==========================================

  const showAllFriends = () => {
    // On reset la liste d'amis
    resetFriendList();
    // ON enlève le smiley triste :'( si aucun jeu trouvé
    foundFriends();
    // On ajoute TOUS les amis à la liste d'amis actuelle pour les afficher
    displayAllFriends();

    // On change le header amis
    friendHeaderRef.current.innerText = "Liste d'amis";
  };
  //! ===========================REDIRECTION================================
  // Si non connecté, renvoie vers la page de login
  if (!isLogged) {
    return <Redirect to="/login" />
  }

  //! ======================================================================
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
                <div><Icon name="steam" color="grey" /> : {steamUsername}</div>
                {/* <div>Status: Online </div> */}
                <Button
                icon
                labelPosition='right'
                className="Homepage-profile-displayFriends-button"
                floated="left"
                basic
                inverted
                onClick={showAllFriends}>Afficher tous les amis <Icon name="users" /></Button>
                {/* <div className='Homepage-profile--playerinfo--mood'>Humeur
                  <Dropdown clearable options={moodOptions} floating selection />
                </div> */}
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
              <Card.Group itemsPerRow={3} className="Homepage-profile--playergames--gamelist">
                {filteredSteamLibrary.map((game) => (
                  <Card className="Homepage-profile--playergames--game" key={game.game.id} onClick={handleGameClick}>
                    <Image className='game-image' src={game.game.picture} ui={false} />
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
        <Grid.Column width={10} className="homepage-friendCardsList">
          {/* VISIBLE UNIQUEMENT SI COMPTE EN PRIVE */}
          {!visibilityState && (
            <Segment inverted className='Homepage-friendCardsList--privateAccount--message'>
              <Header icon textAlign='center' inverted >
                <Icon name='ban' circular color='red' />
                <Header.Content as='h1' >ATTENTION</Header.Content>
                <Divider />
                <h2>Il semblerait que les données de votre compte Steam soient privées, vos données risquent de ne pas pouvoir s'afficher correctement ni de s'actualiser</h2>
                <h4>Nous vous invitons à consulter notre <Link to="/FAQ">FAQ</Link> à ce sujet.</h4>
              </Header>
            </Segment>
          )}
            <Header className="friendCardsList-header" as="h2" textAlign="center"><span ref={friendHeaderRef}>Liste d'amis:</span></Header>
            {noFriendsFound && (
            <div className="notFound">:'(</div>
            )}
            <Card.Group stackable itemsPerRow={3}>
              {filteredFriendsList.map((friend) => (
                <Card className="friendCard-element" key={friend.id}>
                  <Card.Content>
                    <Image
                      className="friendCard-picture"
                      floated="left"
                      size="tiny"
                      src={friend.steamAvatar}
                    />
                    <Card.Header className="friendCard-nexusTag">{friend.pseudo}</Card.Header>
                    <Card.Description className="friendCard-steamTag"><Icon name="steam" color="black" /> : {friend.steamUsername}</Card.Description>
                    {/* <Card.Meta className="friendCard-currentMood"> Mood séléctionné</Card.Meta> */}
                    {/* <Button className="friendCard-button">
                      Proposer une partie
                    </Button> */}
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
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
