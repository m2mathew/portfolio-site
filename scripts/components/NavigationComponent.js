'use strict';

let React = require('react');
let Backbone = require('backbone');

module.exports = React.createClass({
	getInitialState() {
	    return {
	        links: []
	    };
	},

	render () {
		var currentPage = Backbone.history.getFragment();

		let links = [
			<li key="home" className={currentPage === '' ? 'active nav-link' : 'nav-link'}><a href="#">Home</a></li>,
			<li key="resume" className={currentPage === 'resume' ? 'active nav-link' : 'nav-link'}><a href="#resume">Resume</a></li>
		];


		return (
			<div className="nav-bar">
				<h2>Nav</h2>
				<ul>
					{links}
				</ul>
			</div>
		);
	}
});
