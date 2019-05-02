import React, { Component } from 'react';

import pic1 from './IMG_4688.JPG';
import './styles/ProfileImage.css';

class ProfileImage extends Component {
	render() {
		return (
			<div className="ProfileImage animated fadeIn">
				
					<img src={pic1} data-src={pic1} id="profile-image" alt=""/>
				
			</div>
		);
	}
}

export default ProfileImage;