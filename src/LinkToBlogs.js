import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import InViewMonitor from 'react-inview-monitor'

import BlogPost from './BlogPost'
import './animate.css'
import './LinkToBlogs.css'

class LinkToBlogs extends Component {
	render() {
		return (
			<div className="LinkToBlogs">
				<InViewMonitor classNameNotInView="vis-hidden"
					classNameInView="animated fadeInLeft">


					<BlogPost />


				</InViewMonitor>
			</div>
		);
	}
}

export default LinkToBlogs;