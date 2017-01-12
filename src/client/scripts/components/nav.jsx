import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import '../../styles/nav.scss';

const mapStateToProps = state =>
   ({
     currentLocation: state.currentLocation,
     currentRoot: state.currentRoot,
     routing: state.routing,
   });

const mapDispatchToProps = dispatch => ({
  goHome: () => {
    dispatch(push('/'));
  },
});

class NavBar extends Component {
  render() {
    const localRoot = this.props.currentRoot.currentRoot;
    const currentCity = this.props.currentLocation.city;
    const pathName = this.props.routing.locationBeforeTransitions.pathname;

    let navBar = null;

    if (pathName === '/city') {
      navBar = (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => this.props.goHome()}>TRIP_RAPTOR
            <span> | Planning your trip to {currentCity} city</span>
            </a>
          </div>
        </nav>);
    } else if (pathName.includes(`/city/${localRoot}`)) {
      navBar = (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => this.props.goHome()}>TRIP_RAPTOR
            <span> | Choosing {localRoot} you like</span>
            </a>
          </div>
        </nav>);
    } else {
      navBar = (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => this.props.goHome()}>TRIP_RAPTOR</a>
          </div>
        </nav>);
    }
    return (
      <div>
        {navBar}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
