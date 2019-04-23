import React, { Component } from 'react';
// import Jump from 'react-reveal/Jump';

import ProfileImage from './ProfileImage'
import resume from './resume.pdf'
import './Home.css'

class Home extends Component {

	render() {
		return (
			<div className="Home">
				<div id="welcome">
					<div>
						<h5>Why hello there! My name is </h5>
					</div>
					<div>
						<h1>Gabriela Balicas</h1>
					</div>
					<div>
						<h2>I build things for the internet</h2>
					</div>
					<div id="a-tags" className="animated bounceInUp">

						{/* RESUME */}
						<div class="svg-wrapper">
							<svg xmlns="http://www.w3.org/2000/svg">
								<rect class="shape" />
							</svg>
							<div class="text">
								<a href={resume} download="resume"> resume </a>
							</div>
						</div>

						{/* EMAIL */}
						<div class="svg-wrapper">
							<svg xmlns="http://www.w3.org/2000/svg">
								<rect class="shape" />
							</svg>
							<div class="text"><a href="mailto:balicas.gb@gmail.com">email</a></div>

						</div>

						{/* GITHUB */}
						<div class="svg-wrapper">
							<svg xmlns="http://www.w3.org/2000/svg">
								<rect class="shape" />
							</svg>
							<div class="text"><a href="https://github.com/gabinuevo">github</a></div>

						</div>

						{/* LINKEDIN  */}
						<div class="svg-wrapper">
							<svg xmlns="http://www.w3.org/2000/svg">
								<rect class="shape" />
							</svg>
							<div class="text"><a href="https://www.linkedin.com/in/gabriela-balicas-9091a1a0/">linkedin</a></div>

						</div>
					</div>

				</div>
				<span>
					<ProfileImage />
				</span>
				<div id="scroll-pls" >
					<h3><i class="fas fa-chevron-circle-down floating"></i></h3>
				</div>
			</div>
		);
	}
}

export default Home;