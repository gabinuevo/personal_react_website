import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import InViewMonitor from 'react-inview-monitor';

import BlogPost from './BlogPost';
import { blogInfo } from './blogInfo';
import './animate.css';
import './LinkToBlogs.css';

class LinkToBlogs extends Component {
	render() {
		return (
			<div className="LinkToBlogs">
				<InViewMonitor classNameNotInView="vis-hidden"
					classNameInView="animated fadeInUp">
					<h1>Get in my mind</h1>
				</InViewMonitor>
					{/* <BlogPost />
					<BlogPost /> */}
					<BlogPost blog={blogInfo.blog1}/>
			</div>
		);
	}
}

export default LinkToBlogs;