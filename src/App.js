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
    return (
      <div className="App">
        <NavBar />
        <Home />

        <AboutMe />

        <LinkToBlogs />

        <div className="top">
          <a href="#welcome">
            <img id="Navbar-logo" src={logo} alt="logo"/>
          </a>
        </div>
        <MyProjects/>
      </div>
    );
  }
}

export default App;
