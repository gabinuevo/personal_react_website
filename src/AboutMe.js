import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';

import { californiaSVG } from './SVGs';
import SVGContainer from './SVGContainer';
import Label from './Label';
import './styles/AboutMe.css';

class AboutMe extends Component {
  static defaultProps = {
    tech: ["React", "Redux", "Javascript", "Python", "Express", "Flask", "SQL", "SQLAlchemy", "npm", "Jest", "PostgreSQL", "Django"]
  }


  render() {
    const labels = this.props.tech.map((l) => <Label label={l} key={l} />)

    return (
      <InViewMonitor
        classNameNotInView="vis-hidden"
        classNameInView="animated fadeIn">
        <div className="AboutMe" id="AboutMe" ref={this.ref}>
          <h3> I am a Full Stack Developer based out of San Francisco </h3>
          <p>
            I am passionate about building things that reside on the web. At any given time, I am probably thinking of apps that provide intuitive and beautiful user interfaces with fast and efficient backends.
          </p>
          <p>
            I graduated from Rice University with a degree in Sports Medicine. After working for a year and a half, I realized that it wasn't the field for me, and so I made the decision to go to Rithm School to pursue a career that more closely mirrors my interests.
          </p>
          <p>
            Outside of coding, I spend much of my time around all things weightlifting. A recently retired athlete, I spend much of my free time helping coach the next generation of American weightlifters. Otherwise, I write movie scripts that I wish had existed when I was a child.

            Below are a few technologies that I have been working with on my recent projects.
        </p>
          <div className="AboutMe-labels">
            {labels}
          </div>
        </div>

        <SVGContainer identification="california" svg={californiaSVG} />

      </InViewMonitor >
    );
  }
}

export default AboutMe;