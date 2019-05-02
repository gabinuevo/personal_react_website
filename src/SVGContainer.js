import React, { Component } from 'react';


import './styles/SVGContainer.css';
import './animate.css';

class SVGContainer extends Component {

  render() {
    const svg = this.props.svg;
    return (
      <div className="SVGContainer" id={this.props.identification} dangerouslySetInnerHTML={{ __html: svg }}>

      </div>
    );
  }
}


export default SVGContainer;