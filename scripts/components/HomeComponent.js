'use strict';

const React = require('react');
const TitleComponent = require('./TitleComponent');
const AboutComponent = require('./AboutComponent');
const WorkComponent = require('./WorkComponent');

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
