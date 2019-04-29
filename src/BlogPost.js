import React, { Component } from 'react';
import InViewMonitor from 'react-inview-monitor';
import './animate.css';
import './BlogPost.css';


class BlogPost extends Component {
	render() {
		const blog = this.props.blog;
		return (
			<InViewMonitor
				classNameNotInView="vis-hidden"
				classNameInView="animated fadeInLeft">
				<div className="BlogPost">
					<div id="paper">
						<h2 className="BlogPost-title">{blog.title}</h2>
						<p className="BlogPost-description">{blog.description}</p>
						<p className="BlogPost-intro">{blog.intro}</p>
						<a href={blog.link} className="BlogPost-link">Continue reading</a>
					</div>
				</div>

			</InViewMonitor>
		);
	}
}

export default BlogPost;