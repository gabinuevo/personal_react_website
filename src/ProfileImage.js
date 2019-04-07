import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import pic1 from './face_profile.jpeg'
import './ProfileImage.css'

class ProfileImage extends Component {
	render() {
		return (
			<div className="ProfileImage">
				<Zoom>
					<img src={pic1} data-src={pic1} id="profile-image" />
				</Zoom>
			</div>
		);
	}
}

export default ProfileImage;