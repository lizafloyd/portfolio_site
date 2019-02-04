import React from 'react';
import placeholder from '../assets/images/placeholder.png';
/**
 * Renders the main App components.
 */
const WorkExperience = () => (
  <div className="header row">
    <div className="header-image small-5">
      <img src={placeholder} className="responsive-image" alt="Placeholder" />
    </div>
    <div className="header-text small-7">
      <h2 className="subtitle">Work Experience</h2>
      <p>Some details.</p>
    </div>
  </div>
);

export default WorkExperience;
