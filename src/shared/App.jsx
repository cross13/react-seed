import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import Landing from '../pages/landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>React Seed</title>
          <meta name="description" content="React Seed" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Landing />
      </div>
    );
  }
}

export default hot(module)(App);
