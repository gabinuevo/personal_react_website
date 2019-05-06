import React, { Component } from 'react';
import './styles/MyProjects.css';

import { projectInfo } from './ProjectInfo';
import Project from './Project';

class MyProjects extends Component {
	render() {
		const projects = Object.values(projectInfo)
			.map((p) => <Project p={p} key={p.title} />)

		return (
			<div className="MyProjects" id="MyProjects">

					<h1 className="colorAnim">My Projects</h1>

					<div className="MyProjects-Projects">
						{projects}
					</div>
				</div>
		);
	}
}

export default MyProjects;