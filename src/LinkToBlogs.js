import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import InViewMonitor from 'react-inview-monitor';

import BlogPost from './BlogPost';
import { blogInfo } from './blogInfo';
import './animate.css';
import './LinkToBlogs.css';

class LinkToBlogs extends Component {
	render() {
		let blogs = [];
		for (let key in blogInfo) {
			blogs.unshift(<BlogPost blog={blogInfo[key]} />)
		}
		return (
			<div className="LinkToBlogs">
				<InViewMonitor classNameNotInView="vis-hidden"
					classNameInView="animated fadeInUp">
					<h1>Get in my mind</h1>
				</InViewMonitor>
					{blogs}
			</div>
		);
	}
}

export default LinkToBlogs;