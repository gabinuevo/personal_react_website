import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './NavBar.css'

class NavBar extends Component {

  
  render() {
    return (
      <div className="NavBar">
        <div class="NavBar-Inner">
            {/* <div class="top"><a href="#">Volker Otto</a></div> */}
          <div class="NavBar-Bottom">
            <Link to="AboutMe">ABOUT ME</Link>
              <Link to="https://twitter.com/hellovolker">MY THOUGHTS</Link>
            </div>
          </div>
        {/* <Link to="#AboutMe">About Me</Link> */}
      </div>
    );
  }
}

export default NavBar;