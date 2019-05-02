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
    const style = {
      width: "40%",
      paddingBottom: "92%", 
      height: "1px",
      overflow: "visible"
    }
    return (
      <InViewMonitor
        classNameNotInView="vis-hidden"
        classNameInView="animated fadeIn">
        <div className="AboutMe" id="AboutMe" ref={this.ref}>
          <h3> I'm a react developer based out of San Francisco </h3>
          <p>
            Currently, I am finishing up a full-stack web development bootcamp at Rithm school. Post-graduation, I am looking to join a company as an apprentice engineer.

            Outside of coding, I spend much of my time around all things weightlifting. A recently retired athlete, I spend much of my free time helping coach the next generation of American weightlifters. Otherwise, I love to write movie scripts that I wish had existed when I was a child.

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