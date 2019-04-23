import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';

import Label from './Label'
import './AboutMe.css'

class AboutMe extends Component {
  static defaultProps = {
    tech: ["React", "Redux", "Javascript", "Python", "Express", "Flask", "SQL", "SQLAlchemy", "npm", "Jest", "PostgreSQL", "Django"]
  }
  // constructor(props) {
  //   super(props);
  //   this.ref = React.createRef();
  // }

  // scrollToMyRef() { 
  //   window.scrollTo(0, this.ref.current.offsetTop);
  // }
  // scrollToMyRef = () => window.scrollTo(0, this.ref.current.offsetTop) 


  render() {
    const labels = this.props.tech.map((l) => <Label label={l} />)
    return (
      <InViewMonitor
        classNameNotInView="vis-hidden"
        classNameInView="animated fadeIn">
        <div className="AboutMe" id="AboutMe" ref={this.ref}>
        <h3> About Me </h3>
          <p>
            I'm a react developer based out of San Francisco, CA; Currently, I am finishing up a full-stack web development bootcamp at Rithm school. Post-graduation, I am looking to join a company as an apprentice engineer.

            Outside of coding, I spend much of my time around all things weightlifting. A recently retired athlete, I spend much of my free time helping coach the next generation of American weightlifters. Otherwise, I love to write movie scripts that I wish had existed when I was a child.

            Below are a few technologies that I have been working with on my recent projects.
        </p>
          <div class="AboutMe-labels">
            {labels}
          </div>
        </div>
      </InViewMonitor >
    );
  }
}

export default AboutMe;