import React, { Component } from 'react';

import Home from './Home'
import MyProjects from './MyProjects'
import LinkToBlogs from './LinkToBlogs'
import logo from './grey-G.png'
import AboutMe from './AboutMe'
import NavBar from './NavBar'

import './styles/App.css';

class App extends Component {
  render() {
    var scale = 'scale(100%)';
    document.body.style.webkitTransform = scale;    // Chrome, Opera, Safari
    document.body.style.msTransform = scale;       // IE 9
    document.body.style.transform = scale; 
    return (
      <div className="App">
        <NavBar />
        <Home />

        <AboutMe />

        <MyProjects />

        <div className="top">
          <a href="#welcome">
            <img id="Navbar-logo" src={logo} alt="logo"/>
          </a>
        </div>
        <LinkToBlogs />
      </div>
    );
  }
}

export default App;
