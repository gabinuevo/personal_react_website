import React, { Component } from 'react';
// import *  as animations from './MyProjectsAnimation'
import './MyProjects.css'

class MyProjects extends Component {
	render() {
		return (
			<div className="MyProjects">
				<div className="svg-wrapper">
					<svg className='svg' height="470" width="300" xmlns="http://www.w3.org/2000/svg">
						<rect className="shape one" height="470" width="300" />
						<rect className="shape two" height="470" width="300" />
					</svg>
						<div className="text">HELLOOOO</div>
						<div className="subtext">
							<div className="first">HELLOOOOOOOOO</div>
							<div className="second">For practice</div>
						</div>
				</div>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"> </script>
				{/* <script src='./MyProjectsAnimation.js'> </script> */}
			</div>
		);
	}
}

export default MyProjects;