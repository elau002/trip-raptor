import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

// needs to dispatch to itinerary

import '../../styles/poi_details.scss';

// actions: ADD_TO_ITINERARY, REMOVE_FROM_ITINERARY, FETCH_POI_INFO

const mapStateToProps = state =>
  ({
    selectPOI: state.selectPOI,
  });

const mapDispatchToProps = dispatch =>
  ({
    // dispatch
  });

class POIDetails extends Component {

  // need a way to handle displaying different relevant data
  // (the data to display for hotels may be different than from restaurants)


  // todo add src tag to img.
  // current info within render is example data. change as needed
    // example src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.photos[0].photo_reference}&key=AIzaSyC535s39VzBWKFSXSlMaOllvk5ocBGNh9E`
  render() {
    return (
      <div>
        <div styleName="poiDetail">
          <img />
          <h2>Name of Establishment</h2> Rating
          <div>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>International Phone Number</li>
            </ul>
          </div>
          Website
          <div>
            <button className="btn btn-primary">Add to List</button>
            <button className="btn btn-danger">Remove from List</button>
          </div>
        </div>
      </div>
    );
  }
}

POIDetails.propTypes = {
  // propname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(POIDetails);
