import React from 'react';

import { Container } from 'semantic-ui-react';

import './page404.scss';

const Page404 = () => (
<Container fluid className='mainError'>
<div className='oops'>Oops ! 404 !</div>
<div className='lost'>On dirait que vous vous êtes perdus...</div>
</Container>
);

export default Page404;
