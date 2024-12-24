import React, { Component, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './components/ToDo'

class App extends Component {
  render() {        
    return (
      <div>
        <ToDo/>      
      </div>
    );
  }
}

export default App;
