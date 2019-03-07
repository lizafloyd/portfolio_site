import React from 'react';
import Map from './Map';
import Loader from './icons/Loader';
import {mapPins} from '../constants';
/**
 * Renders the FunFacts component.
 * @returns {string} - Returns JSX representation of the FunFacts component.
 */
const FunFacts = () => (
  <div className="header row margin-horizontal">
    <div className="small-7 extra-small-12">
      <h2 className="subtitle">Fun Facts</h2>
      <ul>
        <li>
          I've been all these places{' '}
          <span
            role="img"
            className="hidden-mobile"
            aria-label="Point right emoji"
          >
            👉
          </span>
          <span
            role="img"
            className="hidden-desktop"
            aria-label="Point up emoji"
          >
            👇
          </span>
        </li>
        <li>I can quote The Lord of the Rings from memory.</li>
        <li>
          I make a mean martini. But only gin. Vodka martinis aren't a thing.
        </li>
        <li>
          I grew up in Yokohama, Japan, a suburb of Tokyo. I can't really speak
          Japanese anymore but I do correct the subtitles sometimes.
        </li>
        <li>
          Julia Child is my spirit guide. Reach out if you ever have a mad
          desire to learn way more about her than you'll ever need to know!
        </li>
      </ul>
    </div>
    <div className="small-5 extra-small-12">
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_MAP_KEY
        }&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={
          <div style={{width: '100%', textAlign: 'center'}}>
            <Loader height="60px" width="60px" />
          </div>
        }
        containerElement={<div style={{height: `300px`}} />}
        mapElement={<div style={{height: `100%`}} />}
        mapPins={mapPins}
      />
    </div>
  </div>
);

export default FunFacts;
