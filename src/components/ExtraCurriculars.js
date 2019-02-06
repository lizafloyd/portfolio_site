import React, { Fragment } from 'react';
import placeholder from '../assets/images/placeholder.png';
/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the ExtraCurriculars component.
 */

const ExtraCurriculars = () => (
  <Fragment>
  <img src={placeholder} className="responsive-image" alt="Placeholder" />
  <div className="header row margin-horizontal">
    <div className="small-7">
      <h2 className="subtitle">Extra Curriculars</h2>
      <p>Some details.</p>
    </div>
  </div>
  </Fragment>
);

export default ExtraCurriculars;
