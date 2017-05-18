// External
const React = require('react');

// Internal
const Title = require('../Title');


// Component Definition
const Speaking = () => (
  <section className="row speaking-box col-sm-12">
    <Title />

    <div className="row">
      <h3 className="well">Upcoming Events</h3>
      <div className="body-text">
        <p>Contact Mike to check his availability for upcoming events!</p>
      </div>
    </div>

    <div className="row">
      <h3 className="well">Previous Talks</h3>

      <div className="previous-talk-box">
        <img src="../../../images/react-101-screenshot.png" width="25%" height="25%" />
        <h4>ReactJS @ The Iron Yard</h4>
        <p>React 101</p>
        <p>January 10, 2017</p>
      </div>
    </div>

  </section>
);

export default Speaking;
