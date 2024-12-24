import React, { Component } from 'react';
import Ratings from './components/Ratings';

class App extends Component {
  render() {        
    return (
      <div>
        <Ratings rating="1"/>
        <Ratings rating="2"/>
        <Ratings rating="3"/>
        <Ratings rating="4"/>
        <Ratings rating="5"/>      
      </div>
    );
  }
}

export default App;