'use strict';

let React = require('react');

module.exports = React.createClass({

	render () {

		return (
			<div className="container work-box">


				<div className="well well-lg">
					<h3 className="title-h3">Drumr</h3>
					<p>A way to find your favorite drummers</p>
				</div>
				<div className="well well-lg">
					<h3 className="title-h3">Iron Quizzes</h3>
					<p>Letting teachers create online quizzes and access statistics</p>
				</div>
				<div className="well well-lg">
					<h3 className="title-h3">Percussion Hub</h3>
					<p>Percussion teachers from a selected area of North Texas can access historical data about their schools</p>
				</div>
				<div className="well well-lg">
					<h3 className="title-h3">We·Blog</h3>
					<p>An app that lets users create blog posts and post them to a blog feed</p>
				</div>
			</div>
		);
	}
});
