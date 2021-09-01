/* eslint-disable max-len */
import React from 'react';

import { Container, Segment, Header, Icon, Divider, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './faq.scss';
import NexuslogoNav from 'src/assets/images/Nexus-logo-nav.png';

const FAQ = () => (
  <Container fluid className='FAQ-MainSegment'>
    <Header as='h1' icon textAlign='center' inverted >
      <Icon name='question' circular />
      <Header.Content>FAQ</Header.Content>
    </Header>
    <Divider />
    <Segment inverted>
      <Header as='h3'>
      <Header.Content> Comment puis-je récupérer mon ID Steam ? </Header.Content>
      </Header>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis mauris nec nulla mollis eleifend quis quis nulla. Fusce lectus risus, tristique eget tempor in, pretium sit amet felis. Ut vel ipsum at ex cursus aliquet. Fusce lorem ante, varius a massa et, vestibulum imperdiet sapien. Mauris vitae viverra mi, sed tristique nibh. Ut tincidunt, metus nec consequat congue, sapien risus fringilla magna, at mollis est ipsum non elit. Fusce pretium lectus sed efficitur congue. Ut commodo quam ac ipsum eleifend luctus. Sed laoreet, lacus eget placerat congue, erat justo auctor nulla, id sodales libero magna quis enim. Cras sit.
    </Segment>
    <Segment inverted>
      <Header as='h3'>
      <Header.Content> Comment puis-je mettre mon profil en public ? </Header.Content>
      </Header>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis mauris nec nulla mollis eleifend quis quis nulla. Fusce lectus risus, tristique eget tempor in, pretium sit amet felis. Ut vel ipsum at ex cursus aliquet. Fusce lorem ante, varius a massa et, vestibulum imperdiet sapien. Mauris vitae viverra mi, sed tristique nibh. Ut tincidunt, metus nec consequat congue, sapien risus fringilla magna, at mollis est ipsum non elit. Fusce pretium lectus sed efficitur congue. Ut commodo quam ac ipsum eleifend luctus. Sed laoreet, lacus eget placerat congue, erat justo auctor nulla, id sodales libero magna quis enim. Cras sit.
    </Segment>
    <Segment inverted>
      <Header as='h3'>
      <Header.Content> Mes données sont-elles utilisées d'une quelconque manière ? </Header.Content>
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
