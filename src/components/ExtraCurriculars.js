import React from 'react';
/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the ExtraCurriculars component.
 */

const ExtraCurriculars = () => (
  <div className="background-yellow">
  
  <div className="container">
  <div className="header row">
    <div className="small-4 extra-small-12 padding-horizontal">
      <h2 className="subtitle">
        Education{' '}
        <span role="img" aria-label="honors">
        🎓
        </span>
      </h2>

      <ul className="list">
      <li>
          <span className="list-title block">Generel Assembly</span>
          <span className="list-description">Bootcamp</span>
        </li>
        <li>
          <span className="list-title block">
            Bachelor's Degree, Anthropology
          </span>
          <span className="list-description">
            The George Washington University
          </span>
        </li>
      </ul>
    </div>

    <div className="small-4 extra-small-12 background-red padding-horizontal">
      <h2 className="subtitle">
        Open Source{' '}
        <span role="img" aria-label="honors">
         💻
        </span>
      </h2>

      <ul className="list">
        <li>
          <span className="list-title block">Portfolio Site</span>
          <span className="list-description">This entire website is open source!</span>
        </li>
        <li>
          <span className="list-title block">
            DC Metro Google Assistant Action
          </span>
          <span className="list-description">
            Contributed to this effort
          </span>
        </li>
      </ul>
    </div>

    <div className="small-4 extra-small-12 padding-horizontal">
      <h2 className="subtitle">
        Extra Curricular{' '}
        <span role="img" aria-label="honors">
         🍋
        </span>
      </h2>


      <ul className="list">
        <li>
          <span className="list-title block">DCJS Co-Organizer</span>
          <span className="list-description">Assisted with organizing DCJS, the districts largest Javascript meetup.</span>
        </li>
        <li>
          <span className="list-title block">
            Google Women Techmaker Member
          </span>
          <span className="list-description">
            Member of the Google Techmaker community.
          </span>
        </li>
      </ul>
    </div>
  </div>
  </div>
  </div>
);

export default ExtraCurriculars;
