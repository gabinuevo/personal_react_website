import React, { Component } from 'react';

import pic1 from './standing_profile.jpeg'
import './ProfileImage.css'

class ProfileImage extends Component {
	render() {
		return (
			<div className="ProfileImage">
				
					<img src={pic1} data-src={pic1} id="profile-image" />
				
			</div>
		);
	}
}

export default ProfileImage;