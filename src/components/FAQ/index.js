/* eslint-disable max-len */
import React from 'react';

import { Container, Segment, Header, Icon, Divider, Image, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './faq.scss';
import howToSteamId1 from 'src/assets/images/howto/Howto-steamid-1.PNG';
import howToSteamId2 from 'src/assets/images/howto/Howto-steamid-3.PNG';
import howToSteamProfile1 from 'src/assets/images/howto/Howto-steamprofile-0.PNG';
import howToSteamProfile2 from 'src/assets/images/howto/Howto-steamprofile-2.png';
import howToSteamProfile3 from 'src/assets/images/howto/Howto-steamprofile-4.png';

const FAQ = () => (
  <Container fluid className='FAQ-MainSegment'>
    <Header as='h1' icon textAlign='center' inverted >
      <Icon name='question' circular />
      <Header.Content>FAQ</Header.Content>
    </Header>
    <Divider />
    <Segment inverted>
      <Header>
      <Header.Content as='h3'> Pourquoi mon ID Steam est-il nécessaire pour utiliser le Nexus ? </Header.Content>
      </Header>
      Votre ID Steam est votre identifiant unique et public de votre compte Steam. <div>Sans celui-ci il nous est malheureusement impossible de récupérer les données de votre compte Steam (telles que la liste de vos jeux ou de vos amis) et donc d'afficher celles-ci sur le Nexus.</div>
    </Segment>
    <Segment inverted>
      <Header>
      <Header.Content as='h3'> Comment puis-je récupérer mon ID Steam ? </Header.Content>
      </Header>
      <h4>Rien de plus simple !</h4>
      <List inverted relaxed ordered>
          <List.Item>Ouvrez votre application Steam.</List.Item>
          <List.Item>Cliquez sur votre profil en haut à droite de l'application</List.Item>
          <Image size='huge' src={howToSteamId1} />
          <List.Item>Puis cliquez sur 'Détails du compte'</List.Item>
          <List.Item>Une nouvelle page s'ouvre.</List.Item>
          <List.Item>Et voilà !</List.Item>
          <Image size='huge' src={howToSteamId2} />
      </List>
    </Segment>
    <Segment inverted>
      <Header>
      <Header.Content as='h3'> Pourquoi faut-il que mon compte Steam soit en public ? </Header.Content>
      </Header>
      Si vos données Steam ne sont pas mises en public, il nous est impossible de récupérer vos données ou de les actualiser pour pouvoir les afficher sur le Nexus et vous garantir une utilisation optimale.
    </Segment>
    <Segment inverted>
      <Header>
      <Header.Content as='h3'> Comment puis-je mettre mon profil en public ? </Header.Content>
      </Header>
      <List inverted relaxed ordered>
          <List.Item>Ouvrez votre application Steam.</List.Item>
          <List.Item>Cliquez sur votre profil tout de suite en haut de la page</List.Item>
          <Image size='huge' src={howToSteamProfile1} />
          <List.Item>Puis cliquez sur 'Profil'</List.Item>
          <List.Item>Une nouvelle page s'ouvre.</List.Item>
          <List.Item>Cliquez ensuite sur 'Modifier le profil'</List.Item>
          <Image size='huge' src={howToSteamProfile2} />
          <List.Item>Une nouvelle page s'ouvre à nouveau.</List.Item>
          <List.Item>Cliquez enfin sur 'Options de confidentialité'</List.Item>
          <List.Item>Assurez-vous que vos données soient bien réglées de la manière suivante</List.Item>
          <Image size='huge' src={howToSteamProfile3} />
      </List>
    </Segment>
    <Segment inverted>
      <Header>
      <Header.Content as='h3'> Mes données sont-elles utilisées d'une quelconque manière ? </Header.Content>
      </Header>
      <h4>Absolument pas !</h4>
      <div>Sans rentrer dans les détails techniques nous ne faisons qu'utiliser les données publiques transmises par Steam (<b> et disponible gratuitement et librement par tous</b>) qui ne contiennent <b>aucune données sensibles.</b> (Donc ni mot de passe, ni historique de messagerie, etc...)</div>
      <div>De notre côté, nous n'avons donc , en résumé, absolument aucun accès à vos données, quelles qu'elles soient. Ormis celles auxquelles nous pourrions avoir accès si nous étions amis avec vous sur Steam !</div>
    </Segment>
    <Link to='/'>
      <div className='FAQ-linkToHome'>Retour à l'accueil</div>
    </Link>
  </Container>
);

export default FAQ;
