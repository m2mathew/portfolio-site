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
			<div className="container-fluid">

				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Michael D. Mathew</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						{links}
					 </ul>
				</div>
			</div>
		);
	}
});
