import React from 'react';
import PartnerSlider from './PartnerSlider';

/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the WorkExperience component.
 */
const WorkExperience = () => (
  <div className="header row margin-horizontal">
    <div className="small-5">
      <PartnerSlider />
    </div>
    <div className="small-7">
      <h2 className="subtitle">Work Experience</h2>
      <p>Some details.</p>
    </div>
  </div>
);

export default WorkExperience;
