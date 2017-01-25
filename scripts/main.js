'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Backbone = require('backbone');

window.$ = require('jquery');
window.jQuery = $;

const Home = require('./components/Home');
const Navigation = require('./components/Navigation');
const Resume = require('./components/Resume');

let app = document.getElementById('app');
let nav = document.getElementById('nav');

let Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'resume': 'resume'
	},
	home: function() {
		ReactDOM.render(
			<Home />, app
		);
	},
	resume: function() {
		ReactDOM.render(
			<Resume />, app
		);
	}
});

let r = new Router;
Backbone.history.start();

ReactDOM.render(
	<Navigation router={r} />, nav
);
