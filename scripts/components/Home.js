// External
const React = require('react');

// Internal
const Title = require('./Title');
const About = require('./About');
const Work = require('./Work');


// Component Definition
const Home = () => (
  <section className="home-box row col-sm-12">
    <Title />
    <About />
    <Work />
  </section>
);

export default Home;
