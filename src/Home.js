import React, { Component } from 'react';

import './Home.css'

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div>
					<h5>Why hello there! My name is </h5>
				</div>
				<div>
					<h1>Gabriela Balicas</h1>
				</div>
				<div>
					<h1>I build things for the internet</h1>
				</div>
				<a href="mailto:balicas.gb@gmail.com">Email me!</a>
			</div>
		);
	}
}

export default Home;