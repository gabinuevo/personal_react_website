import React, { Component } from 'react';

import './styles/NavBar.css'

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-Inner">
          <div className="NavBar-Bottom">
            <a href="#AboutMe">ABOUT ME</a>
            <p>|</p>
            <a href="#LinkToBlogs">MY THOUGHTS</a>
            <p>|</p>
            {/* TODO */}
            <a href="#LinkToBlogs">MY PROJECTS</a> 
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;