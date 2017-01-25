// External
const React = require('react');
const Backbone = require('backbone');


// Component Definition
module.exports = React.createClass({
  getInitialState() {
    return {
      links: []
    };
  },
  componentWillMount() {
    this.props.router.on('route', () => {
        this.forceUpdate();
    });
  },
  componentDidMount() {
    $(document).ready(function(){
      $('.dropdown-toggle').dropdown();
    })
  },
  render() {
    let currentPage = Backbone.history.getFragment();

    let links = [
      <li key="home" className={currentPage === '' ? 'active nav-link' : 'nav-link'}><a href="#">home</a></li>,
      <li key="resume" className={currentPage === 'resume' ? 'active nav-link' : 'nav-link'}><a href="#resume">resume</a></li>
    ];

    return (
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-left" id="menu">
            {links}
          </ul>
        </div>
      </div>
    );
  }
});
