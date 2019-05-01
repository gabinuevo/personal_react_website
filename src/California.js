import React, { Component } from 'react';
import CaliforniaSVG from './CaliforniaSVG'
// import * as SVG from '-svg-react-loader./Blank-California-Outline_animated.svg';

class California extends Component {
  constructor(props) {
    super(props);
    this.animateMe=this.animateMe.bind(this);
  }

  animateMe(myVivus) {
    myVivus.el.setAttribute('height', 'auto');
  }

  render() {
    return (
      <div className="California">
        <CaliforniaSVG/>
      </div>
    );
  }
}

export default California;