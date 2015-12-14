'use strict';

let React = require('react');
let TitleComponent = require('./TitleComponent');
let AboutComponent = require('./AboutComponent');
let WorkComponent = require('./WorkComponent');

module.exports = React.createClass({

	render () {

		return (
			<section className="container-fluid home-box col-lg-12">
				<TitleComponent />

				<AboutComponent />

				<WorkComponent />

			</section>
		);
	}
});
