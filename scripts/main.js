'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let Backbone = require('backbone');

window.$ = require('jquery');
window.jQuery = $;

let HomeComponent = require('./components/HomeComponent');
let NavigationComponent = require('./components/NavigationComponent');
let ResumeComponent = require('./components/ResumeComponent');

let app = document.getElementById('app');
let nav = document.getElementById('nav');

let Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'resume': 'resume'
	},
	home: () => {
		ReactDOM.render(
			<HomeComponent />, app
		);
	},
	resume: () => {
		ReactDOM.render(
			<ResumeComponent />, app
		);
	}
});

let r = new Router;
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />, nav
);
