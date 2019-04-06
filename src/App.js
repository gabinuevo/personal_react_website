import React, { Component } from 'react';

import Home from './Home'
import logo from './gold-G.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img id="App-logo" src={logo}/>

        <Home/>
        
      </div>
    );
  }
}

export default App;
