import React, { Component } from 'react';
import * as svg from './california.svg'
import LazyLinePainter from 'lazy-line-painter'

class CaliforniaSVG extends Component {
  constructor(props) {
    super(props);
    this.applyAnimation = this.applyAnimation.bind(this);
  }

  applyAnimation() {
    let el = document.querySelector('#my-svg')

    // initialise & configure LazyLinePainter
    let myAnimation = new LazyLinePainter(el, { strokeWidth: 10 })

    // paint! :)
    myAnimation.paint()
  }

  render() {
    return (
      <div className="CaliforniaSVG" dangerouslySetInnerHTML={{__html: svg}}>
        {this.applyAnimation}
      </div>
    );
  }
}


export default CaliforniaSVG;