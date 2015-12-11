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

		return (
			<div className="container-fluid">

				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-left" id="menu">
						<li key="home" className="nav-link"><a href="#">home</a></li>
						<li key="resume" className="nav-link"><a href="#resume">resume</a></li>
					</ul>
				</div>
			</div>
		);
	}
});
