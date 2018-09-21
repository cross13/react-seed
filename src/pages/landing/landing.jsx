import React from 'react';
import HelloWorld from '../../components/hello-world';
import Avatar from '../../components/avatar';

import './landing.scss';

const Landing = () => (
  <div className="Landing">
    <div className="Landing--content">
      <Avatar />
      <HelloWorld title="Hello from React" />
    </div>
  </div>
);

export default Landing;
