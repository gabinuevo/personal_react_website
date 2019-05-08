import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';

import { deskSVG } from './SVGs';
import SVGContainer from './SVGContainer';
import BlogPost from './BlogPost';
import { blogInfo } from './blogInfo';
import './styles/LinkToBlogs.css';

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
				<div>
					{blogs}
				</div>
				<div>
					<SVGContainer identification="desk" svg={deskSVG} />
				</div>
			</div>
		);
	}
}

export default LinkToBlogs;