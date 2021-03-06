import React, { Component } from 'react';

import ProfileImage from './ProfileImage';
import resume from './resume.pdf';
import './styles/Home.css';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div id="welcome">
					<h5>
						Why hello there! My name is: 
						</h5>
					<div>
						<h1>
								Gabriela Balicas
						</h1>
					</div>
					<div>
						<h2 className="Home-purpose"> 
							I build things for the internet.
						</h2>
					</div>
					<div id="a-tags" className="animated fadeIn">

						{/* RESUME */}
						<div className="link-wrapper">
							<div className="text">
								<a href={resume} download="resume"> resume </a>
							</div>
						</div>

						{/* EMAIL */}
						<div className="link-wrapper">
							<div className="text"><a href="mailto:balicas.gb@gmail.com">email</a></div>
						</div>

						{/* GITHUB */}
						<div className="link-wrapper">
							<div className="text"><a href="https://github.com/gabinuevo">github</a></div>
						</div>

						{/* LINKEDIN  */}
						<div className="link-wrapper">
							<div className="text"><a href="https://www.linkedin.com/in/gabriela-balicas">linkedin</a></div>

						</div>
					</div>

				</div>
				<span>
					<ProfileImage />
				</span>

			</div>
		);
	}
}

export default Home;