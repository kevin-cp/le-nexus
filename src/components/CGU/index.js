/* eslint-disable max-len */
import React from 'react';

import { Container, Segment, Header, Icon, Divider, Image, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './CGU.scss';

const CGU = () => (

<Container fluid className='CGU-Container' >
  <Header as='h1' icon textAlign='center' inverted >
    <Icon name='law' circular />
    <Header.Content>Conditions Générales d'Utilisation</Header.Content>
    <div className='CGU-Header--date'>En vigueur au 13/09/2021</div>
  </Header>
  <Divider />
  <div>
    Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».
  </div>
  <div>
    Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ».
  </div>

    <div>
      En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site.
    </div>

    <div>
    <u>http://lenexus.surge.sh</u>  se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.
    </div>
    
  <Segment inverted>
      <Header>
      <Header.Content as='h3'> Article 1: <span className='CGU-Article--title'>Accès au site</span> </Header.Content>
      </Header>
    <List>
      <List.Item>
        Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
      </List.Item>
      <List.Item>
        L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des informations sincères et exactes concernant son adresse e-mail.
      </List.Item>
      <List.Item>
        Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription.
      </List.Item>
      <List.Item>
        Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable.
      </List.Item>
      <List.Item>
        Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de http://lenexus.surge.sh. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou suspension de service, même sans préavis.
      </List.Item>
    </List>
  </Segment>
  <Segment inverted>
      <Header>
      <Header.Content as='h3'> Article 2: <span className='CGU-Article--title'>Collecte des données</span> </Header.Content>
      </Header>
    <List>
      <List.Item>
        Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les Utilisateurs.
      </List.Item>
    </List>
  </Segment>
  <Segment inverted>
      <Header>
      <Header.Content as='h3'> Article 3: <span className='CGU-Article--title'>Propriété intellectuelle</span> </Header.Content>
      </Header>
    <List>
      <List.Item>
        Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
      </List.Item>
      <List.Item>
        L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
      </List.Item>
      <List.Item>
        Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.
      </List.Item>
      <List.Item>
        Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
      </List.Item>
    </List>
  </Segment>
  <Segment inverted>
      <Header>
      <Header.Content as='h3'> Article 4: <span className='CGU-Article--title'>Responsabilité</span> </Header.Content>
      </Header>
    <List>
      <List.Item>
        Les sources des informations diffusées sur le site <u>http://lenexus.surge.sh</u> sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
      </List.Item>
      <List.Item>
        Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site <u>http://lenexus.surge.sh</u> ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
      </List.Item>
      <List.Item>
        L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.
      </List.Item>
      <List.Item>
        Le site <u>http://lenexus.surge.sh</u> ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.
      </List.Item>
      <List.Item>
        La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
      </List.Item>
    </List>
  </Segment>
  <Segment inverted>
      <Header>
      <Header.Content as='h3'> Article 5: <span className='CGU-Article--title'>Liens hypertextes</span> </Header.Content>
      </Header>
    <List>
      <List.Item>
        Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site <u>http://lenexus.surge.sh.</u> Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
      </List.Item>
    </List>
  </Segment>
  <Segment inverted>
      <Header>
      <Header.Content as='h3'> Article 6: <span className='CGU-Article--title'>Droit applicable et juridiction compétente</span> </Header.Content>
      </Header>
    <List>
      <List.Item>
        La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
      </List.Item>
    </List>
  </Segment>
  <Link to='/'>
      <div className='CGU-linkToHome'>Retour à l'accueil</div>
  </Link>
</Container>

);

export default CGU;
