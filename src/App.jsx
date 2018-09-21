import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Landing from './pages/landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default hot(module)(App);
