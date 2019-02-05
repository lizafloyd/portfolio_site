import React from 'react';
import placeholder from '../assets/images/placeholder.png';
/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the FunFacts component.
 */
const FunFacts = () => (
  <div className="header row margin-horizontal">
    <div className="header-text small-7">
      <h2 className="subtitle">Fun Facts</h2>
      <p>Some details.</p>
    </div>
    <div className="header-image small-5">
      <img src={placeholder} className="responsive-image" alt="Placeholder" />
    </div>
  </div>
);

export default FunFacts;
