import React, { Component } from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import InViewMonitor from 'react-inview-monitor'
import './animate.css'
import './LinkToBlogs.css'

class LinkToBlogs extends Component {
	render() {
		return (
			<div className="LinkToBlogs">
				<InViewMonitor classNameNotInView="vis-hidden"
					classNameInView=""
					childPropsInView={{ animate: true }}>

					<MtSvgLines duration={100} fade>
						<svg className="icon-element icon-element--lightbulb" viewBox="0 0 50 82">
							<g fill="none" fillRule="evenodd">
								<path d="M5.49 22.3h39.65l3.386-7.98s2.66-7.98-9.67-11.364C26.523-.43 20.05.046 9.84 3.956S1.62 16.01 1.62 16.01l3.87 6.29z" />
								<path d="M8.392 28.343h34.334S36.92 42.366 36.92 47.927c0 5.56-.243 12.088-4.352 12.088H19.21c-5.578 0-5.578-7.396-5.578-12.088 0-4.692-5.24-19.584-5.24-19.584z" />
								<path d="M17.25 64.083v4.254l16.166-1.67V63.75z" />
								<path d="M17.25 72.25l15.916-1.5.084 2.833-16 1.583V72.25z" />
								<path d="M21.666 78.166l7.167-.666s-.5 3.167-3.416 3.5c-2.917.333-3.75-2.834-3.75-2.834z" />
							</g>
						</svg>
					</MtSvgLines>

				</InViewMonitor>
			</div>
		);
	}
}

export default LinkToBlogs;