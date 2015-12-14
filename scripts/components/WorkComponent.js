'use strict';

let React = require('react');

module.exports = React.createClass({

	render () {

		return (
			<div className="container work-box">


				<div className="well well-lg">
					<a href="http://drumr.getforge.io/"><h3 className="title-h3">Drumr</h3></a>
					<p>A way to find your favorite drummers</p>
				</div>
				<div className="well well-lg">
					<a href="http://tiy-austin-front-end-engineering.github.io/"><h3 className="title-h3">Iron Quizzes</h3></a>
					<p>Letting teachers create online quizzes and access statistics</p>
				</div>
				<div className="well well-lg">
					<a href="#"><h3 className="title-h3">Find a Spot</h3></a>
					<p>Percussion teachers from a selected area of North Texas can access historical data about their schools</p>
				</div>
				<div className="well well-lg">
					<a href="#"><h3 className="title-h3">We·Blog</h3></a>
					<p>An app that lets users create blog posts and post them to a blog feed</p>
				</div>
			</div>
		);
	}
});
