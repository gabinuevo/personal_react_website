import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink to="#AboutMe">About Me</NavLink>
      </div>
    );
  }
}

export default NavBar;