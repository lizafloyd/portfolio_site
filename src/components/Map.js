import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = (props) => (
  <GoogleMap defaultZoom={1} defaultCenter={{lat: 39.3999, lng: 12.2245}}>
    {props.isMarkerShown &&
      props.mapPins.map((pin, index) => (
        <Marker key={index} position={{lat: pin.lat, lng: pin.lng}} />
      ))}
  </GoogleMap>
);

export {Map as PureMap};
export default withScriptjs(withGoogleMap(Map));
