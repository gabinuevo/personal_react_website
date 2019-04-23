import React, { Component } from 'react';

import Home from './Home'
import logo from './gold-G.png'
import LinkToBlogs from './LinkToBlogs'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {/* <img id="App-logo" src={logo}/> */}

        <Home/>

        <AboutMe/>

        <LinkToBlogs/>

      </div>
    );
  }
}

export default App;
