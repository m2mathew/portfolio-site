const React = require('react');
const Title = require('./Title');
const About = require('./About');
const Work = require('./Work');

module.exports = React.createClass({

  render() {
    return (
      <section className="home-box row col-sm-12">
        <Title />

        <About />

        <Work />

      </section>
    );
  }
});
