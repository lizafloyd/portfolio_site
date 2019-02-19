import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

/**
 * Renders the Map component.
 * @param {object} props - Component props
 * @returns {string} - Returns JSX representation of the Map component.
 */
const Map = (props) => (
  <GoogleMap defaultZoom={1} defaultCenter={{lat: 39.3999, lng: 12.2245}}>
    {props.isMarkerShown &&
      props.mapPins.map((pin, index) => (
        <Marker key={index} position={{lat: pin.lat, lng: pin.lng}} />
      ))}
  </GoogleMap>
);

Map.propTypes = {
  isMarkerShown: PropTypes.bool,
  mapPins: PropTypes.array,
};

export {Map as PureMap};
export default withScriptjs(withGoogleMap(Map));
