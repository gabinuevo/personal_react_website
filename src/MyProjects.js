import React, { Component } from 'react';
import './styles/MyProjects.css';

import { projectInfo } from './ProjectInfo';
import Project from './Project';

class MyProjects extends Component {
	render() {
		const projects = Object.values(projectInfo)
			.map((p) => <Project p={p} />)
			
		return (
			<div className="MyProjects">
				<h1>My Projects</h1>
				<div className="MyProjects-Projects">
					{projects}
				</div>
			</div>
		);
	}
}

export default MyProjects;