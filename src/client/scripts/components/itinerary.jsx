import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as RemoveFromItinerary from '../actions/remove_from_itinerary_action';
import RemoveButton from '../containers/removeButton';
// import Share from './share';

import '../../styles/itinerary.scss';

// TODO: incorporate 'REMOVE_FROM_ITINERARY' action and dispatch
// TODO: add Share component
// TODO: styling

// actions: REMOVE_FROM_ITINERARY


const mapStatetoProps = state => ({
  itinerary: state.itinerary,
});
// mapDispatchToProps (for remove from itinerary)

// const mapDispatchToProps = dispatch => ({
//   onRemoveFromListClick: (POIindex, cityOfPOI, oldItinerary) => {
//     const updatedCityPOIArray =
//       [...oldItinerary[cityOfPOI].slice(0, POIindex),
//         ...oldItinerary[cityOfPOI].slice(POIindex + 1)];

//     // property is empty, remove it

//     const newItinerary = oldItinerary;
//     if (updatedCityPOIArray.length <= 0) {
//       delete newItinerary[cityOfPOI];
//       dispatch(RemoveFromItinerary.removeFromItinerary({
//         ...newItinerary,
//       }));
//     } else {
//       dispatch(RemoveFromItinerary.removeFromItinerary({
//         ...oldItinerary,
//         [cityOfPOI]: updatedCityPOIArray,
//       }));
//     }
//   },
// });

class Itinerary extends Component {
  // removeButton(index, city) {
  //   return (
  //     <button
  //       className="btn btn-danger"
  //       onClick={() =>
  //         this.props.onRemoveFromListClick(
  //           index, city, this.props.itinerary.itinerary)}
  //     >
  //       Remove From List
  //     </button>
  //   );
  // }

  render() {
    const itineraryLength = Object.keys(this.props.itinerary.itinerary).length;
    const cities = Object.keys(this.props.itinerary.itinerary);
    // if itinerary is empty, with no properties, this container does not display
    if (itineraryLength <= 0) {
      return <div />;
    }
    return (
      <div styleName="listbox">
        <ul>
          {cities.map(city => (
            this.props.itinerary.itinerary[city].map((POI, index) => (
              <li>
                {city}
                <div>
                  <ul>
                    <li>
                      {POI.name}<br />
                      {POI.formatted_phone_numberphoneNumber}<br />
                      {POI.international_phone_number}<br />
                      {POI.formatted_address}<br />
                      <RemoveButton details={POI} city={city} index={index} />
                    </li>
                  </ul>
                </div>
              </li>
            ))
          ))}
        </ul>
      </div>
    );
    // the first time the itineraryList is not empty, display a handlebar at the
    // middle right-hand side of the window and shake it to suggest to the user
    // that it should be explored (hovered over)

    // if the itineraryList is not empty, and the handlebar is hovered over,
    // slide out a container from the right-hand side

    // on hover, this container slides out from the right-hand side

    // on blur, this container slides back into the right side of the screen

    // insider the container, render the list of added POIs and the cities they correspond to
    // along the bottom of the container, render the share component <Share></Share>
  }
}

Itinerary.propTypes = {
  itinerary: PropTypes.object,
  // propname: PropTypes.string.isRequired,
};

export default connect(mapStatetoProps /* mapDispatchToProps*/)(Itinerary);
