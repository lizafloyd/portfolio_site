import React from 'react';
import Map from './Map';
import { mapPins } from '../constants'
/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the FunFacts component.
 */
const FunFacts = () => (
  <div className="header row margin-horizontal">
    <div className="small-7">
      <h2 className="subtitle">Fun Facts</h2>
      <ul>
        <li>I've been all these places 👉</li>
        <li>Second fun fact</li>
        <li>Another fun fact</li>
        </ul>
    </div>
    <div className="small-5">
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{height: `100%`}} />}
        containerElement={<div style={{height: `300px`}} />}
        mapElement={<div style={{height: `100%`}} />}
        mapPins={mapPins}
      />
    </div>
  </div>
);

export default FunFacts;
