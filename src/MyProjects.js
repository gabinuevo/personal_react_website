import React, { Component } from 'react';
import './styles/MyProjects.css'

import pic1 from './IMG_4688.JPG';
import Project from './Project'

class MyProjects extends Component {
	render() {
		return (
			<div className="MyProjects">
				<h1>My Projects</h1>
				<Project image={pic1}/>
				<Project image={pic1}/>
				<Project image={pic1}/>
			</div>
		);
	}
}

export default MyProjects;