'use strict';

let React = require('react');

module.exports = React.createClass({


	render () {

		return (
			<div className="container home-box">
				<div className="jumbotron bokehs">
					<h1>Michael D. Mathew</h1>
					<h3>Front End Web Developer</h3>
				</div>

				<div className="well well-lg">
					<h2>Drumr</h2>
					<p>A way to find your favorite drummers</p>
				</div>
				<div className="well well-lg">
					<h2>Iron Quizzes</h2>
					<p>Letting teachers create online quizzes and access statistics</p>
				</div>
				<div className="well well-lg">
					<h2>Percussion Hub</h2>
					<p>Percussion teachers from a selected area of North Texas can access historical data about their schools</p>
				</div>
				<div className="well well-lg">
					<h2>We·Blog</h2>
					<p>An app that lets users create blog posts and post them to a blog feed</p>
				</div>
			</div>
		);
	}
});
