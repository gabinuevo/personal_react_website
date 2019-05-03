import React, { Component } from 'react';

import './styles/Project.css';

class Project extends Component {
  render() {
    const { title, description, technologies, link, github } = this.props.p;
    return (
      <span className="Project">

        <div className="wrapper">

          <div className="Project-Info">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{technologies}</p>
            <a href={link}>{ link && "Link" }</a>
            <a href={github}>Github</a>
          </div>

          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 659 522" enableBackground="new 0 0 659 522" xmlSpace="preserve" preserveAspectRatio="none" className="svg">
            <path className="path" width="100%" height="100%" fill="none" stroke="blue" strokeWidth="2" strokeMiterlimit="10" d="M656.5,2.5v517H2.5V2.5H656.5z" />
          </svg>
        </div>

      </span>
    );
  }
}

export default Project;