// External
const React = require('react');

// Internal
const Title = require('./Title');
const About = require('./About');
const Work = require('./Work');


// Component Definition
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
