'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let Backbone = require('backbone');
require('bootstrap');

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
	home: function() {
		ReactDOM.render(
			<HomeComponent />, app
		);
	},
	resume: function() {
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
