/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Loader, Icon, GridColumn } from 'semantic-ui-react';

import NexusLogo from 'src/assets/images/Nexus-logo-big-black.PNG';
import SteamtoNexus from 'src/assets/images/Steam-to-nexus.PNG';
import HowtoNexus1 from 'src/assets/images/howto/howto-nexus-1.png';
import HowtoNexus2 from 'src/assets/images/howto/howto-nexus-2.png';
import HowtoNexus3 from 'src/assets/images/howto/howto-nexus-3.png';

import './loginform.scss';

const LoginForm = ({ email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  loginError,
  isLogged,
  launchLoading,
  isLoading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();

    // ON lance le loading
    launchLoading(true);
  };

  // SI login correct, donc changement state pour loginsuccessfull alors on redirige vers page principale
  if (isLogged) {
    return <Redirect to="/" />;
  }

  return (
    // Ici on met en place le loader
    <>
    <Grid  textAlign='center' style={{ height: '100vh', overflow: 'auto' }} verticalAlign='middle'>
    <Grid.Row className='login-form'>
    <Grid.Column  style={{ maxWidth: 450 }} >
      <h1 className='login-header'>
          Bienvenue sur Le Nexus
        </h1>
      <Header as='h2' color='teal' textAlign='center'>
        Connectez-vous
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
            fluid
            icon='user'
            iconPosition='left'
            placeholder='E-mail'
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
            />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />

          <Button color='teal' fluid size='large'>
            {isLoading && (
              <Loader active inline />
            )}
            {!isLoading && (
              <div>Login</div>
            )}
          </Button>
        </Segment>
      </Form>
      <Message>
        Nouveau parmi nous ? <a href="/signin">Inscrivez-vous</a>
      </Message>
        {loginError && (
        <Message
          error
          header="Impossible de se connecter"
          content="Veuillez vérifier votre email/mot de passe"
        />
      )}
    </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{paddingTop: '8rem' }}>
      <Grid.Column width={8} className='login-presentation--tiredofplayingalone'>
        <h2 className='login-presentation--tiredofplayingalone--header'>Marre de jouer seul ?</h2>
        <div>Vous voulez jouer avec vos amis à des jeux en ligne mais impossible de savoir lequel ? Ni même ceux que vous avez-en commun ?</div>
        <h4>Nous allons vous y aider.</h4>
        <div>Le Nexus est un site communautaire récupérant les données publiques de Steam pour vous permettre de retrouver en un clic les jeux que vous possédez en commun avec vos amis.</div>
      </Grid.Column>
      <Grid.Column width={6} floated='right'>
        <Image circular src={NexusLogo} size="medium" style={{ paddingTop: '2rem' }} />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{paddingTop: '8rem', paddingBottom: '8rem' }}>
      <Grid.Column width={6} >
        <Image src={SteamtoNexus} />
      </Grid.Column>
      <Grid.Column width={8} className='login-presentation--howdoesitwork'>
        <h2 className='login-presentation--howdoesitwork--header'>Comment ça fonctionne ?</h2>
        <div>Le Nexus récupère vos données publiques Steam et filtre automatiquement votre liste d'amis en fonction des jeux que vous possédez en commun.</div>
        <div>De plus, vous pouvez également vous créer votre propre cercle d'amis grâce à notre moteur de recherche intégré d'utilisateurs !</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{paddingTop: '8rem', paddingBottom: '8rem' }} className='login-presentation--oneclickgame' >
      <Grid.Column width={4} className='login-presentation--oneclickgame--column'>
        <h2 className='login-presentation--oneclickgame--header'>Recherchez le jeu souhaité dans votre bibliothèque steam...</h2>
        <Image src={HowtoNexus1} bordered />
      </Grid.Column>
      <Grid.Column width={4} className='login-presentation--oneclickgame--column'>
        <h2 className='login-presentation--oneclickgame--header'>Et la magie s'opère !</h2>
        <Image src={HowtoNexus2} bordered />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={12} className='login-presentation--findfriends'>
      <h2 className='login-presentation--oneclickgame--header'>Agrandissez votre cercle d'ami grâce à notre moteur de recherche d'utilisateurs du Nexus ET de Steam </h2>
          <Image src={HowtoNexus3} />
      </Grid.Column>
    </Grid.Row>
  </Grid>

  
  </>
  );
};

export default LoginForm;
