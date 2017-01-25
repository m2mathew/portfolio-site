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

const app = document.getElementById('app');
const nav = document.getElementById('nav');

// Backbone router
const Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'resume': 'resume'
	},
	home() {
		ReactDOM.render(
			<Home />, app
		);
	},
	resume() {
		ReactDOM.render(
			<Resume />, app
		);
	}
});

const r = new Router;
Backbone.history.start();

// Render the app to the DOM
ReactDOM.render(
	<Navigation router={r} />, nav
);
