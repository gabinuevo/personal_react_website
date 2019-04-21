import React, { Component } from 'react';
import './Triangle.css';

class Triangle extends Component {
  render() {
    return (
      <div className="Triangle">
        <svg class="base-triangle">
          <symbol id="triangle" viewBox="0 0 200 200">
            <path d="M100,0 200,200 0,200z" />
          </symbol>
        </svg>
        <div class="triangles-cont">
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
          <svg class="triangle">
            <use xlink: href="#triangle" />
  </svg>
        </div>
      </div>
    );
  }
}

export default Triangle;