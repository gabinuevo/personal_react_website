import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';

import BlogPost from './BlogPost';
import { blogInfo } from './blogInfo';
import './LinkToBlogs.css';

class LinkToBlogs extends Component {
	render() {
		let blogs = [];
		for (let key in blogInfo) {
			blogs.unshift(<BlogPost
				blog={blogInfo[key]}
				key={key} />)
		}
		return (
			<div className="LinkToBlogs" id="LinkToBlogs">
				<h1 >
					<InViewMonitor classNameNotInView="vis-hidden"
						classNameInView="animated typewriter">
						Get in my mind.
						</InViewMonitor>
				</h1>
				{blogs}
			</div>
		);
	}
}

export default LinkToBlogs;