import React from 'react';
import map from '../assets/images/Map.png';
/**
 * Renders the FunFacts component.
 * @returns {string} - Returns JSX representation of the FunFacts component.
 */
const FunFacts = () => (
  <div className="header row margin-horizontal vertical-align">
    <div className="small-5 extra-small-12">
      <h2 className="subtitle">Fun Facts</h2>
      <ul>
        <li>I can quote The Lord of the Rings from memory.</li>
        <li>
          I grew up in Yokohama, Japan, a suburb of Tokyo. I can't really speak
          Japanese anymore but I do correct the subtitles sometimes.
        </li>
        <li>Julia Child is who I want to be when I grow up.</li>
        <li>
          The teal countries are the ones I've been to. The gray ones are on my
          list{' '}
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
      </ul>
    </div>
    <div className="small-7 extra-small-12">
      <img src={map} alt="Beach scene" className="card responsive-image" />
    </div>
  </div>
);

export default FunFacts;
