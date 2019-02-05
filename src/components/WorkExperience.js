import React from 'react';
import placeholder from '../assets/images/placeholder.png';
/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the WorkExperience component.
 */
const WorkExperience = () => (
  <div className="header row margin-horizontal">
    <div className="small-5">
      <img src={placeholder} className="responsive-image" alt="Placeholder" />
    </div>
    <div className="small-7">
      <h2 className="subtitle">Work Experience</h2>
      <p>Some details.</p>
    </div>
  </div>
);

export default WorkExperience;
