import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';

import './Label.css'

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