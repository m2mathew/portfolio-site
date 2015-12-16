'use strict';

let React = require('react');
let TitleComponent = require('./TitleComponent');
let AboutComponent = require('./AboutComponent');
let WorkComponent = require('./WorkComponent');

module.exports = React.createClass({

	render () {

		return (
			<section className="home-box row col-sm-12">
				<TitleComponent />

				<AboutComponent />

				<WorkComponent />

			</section>
		);
	}
});
