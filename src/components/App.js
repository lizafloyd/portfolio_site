import React, { Component, Fragment } from 'react';
import Header from './Header';
import WorkExperience from './WorkExperience';
import FunFacts from './FunFacts';
import ExtraCurriculars from './ExtraCurriculars';
import PartnerDisplay from './PartnerDisplay';

/**
 * Renders the main App components.
 */
class App extends Component {
  /** Renders the App component.
   * @returns {string} - Returns JSX representation of the App component.
   */
  render() {
    return (
      <Fragment>
        <div className="container">
          <Header />
          <WorkExperience />
        </div>
        <PartnerDisplay />
        <div className="container">
          <FunFacts />
          <ExtraCurriculars />
        </div>
        <div className="background-dark">
          <h2 className="white subtitle text-center">
            This is where contact form and social will go.
          </h2>
        </div>
      </Fragment>
    );
  }
}

export default App;
