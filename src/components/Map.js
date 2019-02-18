import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={1} defaultCenter={{lat: 39.3999, lng: 12.2245}}>
      {console.log(props)}
      {props.isMarkerShown && props.mapPins.map((pin, index) => <Marker key={index} position={{lat: pin.lat, lng: pin.lng}} />)}
    </GoogleMap>
  ))
);

export default Map;
