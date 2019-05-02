import React, { Component } from 'react';

import './styles/Label.css'

class Label extends Component {
  render() {
    return (
      <span className="Label">
        {this.props.label}
      </span>
    );
  }
}

export default Label;