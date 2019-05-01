import React, { Component } from 'react';

import Home from './Home'
import LinkToBlogs from './LinkToBlogs'
import logo from './grey-G.png'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
// import CaliforniaSVG from './CaliforniaSVG'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CaliforniaSVG/> */}
        <NavBar />

        <Home />

        <AboutMe />

        <LinkToBlogs />

        <div className="top">
          <a href="#welcome">
            <img id="Navbar-logo" src={logo} />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
