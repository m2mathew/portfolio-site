// External
const React = require('react');
const ReactDOM = require('react-dom');
const Backbone = require('backbone');

// Internal
const Home = require('./components/Home');
const Navigation = require('./components/Navigation');
const Resume = require('./components/Resume');

window.$ = require('jquery');
window.jQuery = $;

let app = document.getElementById('app');
let nav = document.getElementById('nav');

// Backbone router
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

// Render the app to the DOM
ReactDOM.render(
	<Navigation router={r} />, nav
);
