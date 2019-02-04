import React from 'react';
import placeholder from '../assets/images/placeholder.png';
/**
* Renders the main App components.
*/
const FunFacts = () => (
  <div className="header row">
    <div className="header-text small-7">
      <h2 className="subtitle">Fun Facts</h2>
      <p>Some details.</p>
    </div>
    <div className="header-image small-5">
      <img src={placeholder} className="responsive-image" alt="Placeholder" />
    </div>
  </div>
)

export default FunFacts;
