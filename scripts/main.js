'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Backbone = require('backbone');

window.$ = require('jquery');
window.jQuery = $;

const HomeComponent = require('./components/HomeComponent');
const NavigationComponent = require('./components/NavigationComponent');
const ResumeComponent = require('./components/ResumeComponent');

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
