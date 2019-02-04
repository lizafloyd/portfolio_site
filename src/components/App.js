import React, {Component} from 'react';
import Header from './Header';
import WorkExperience from './WorkExperience';
import FunFacts from './FunFacts';
import ExtraCurriculars from './ExtraCurriculars';
import PartnerDisplay from './PartnerDisplay';
import Contact from './Contact';

/**
* Renders the main App components.
*/
class App extends Component {
  /** Renders the App component.
  * @returns {string} - Returns JSX representation of the App component.
  */
  render() {
    return (
      <React.Fragment>
      <div className="App container">
        <Header />
        <WorkExperience />
      </div>
        <PartnerDisplay />
      <div className="App container">
        <FunFacts />
        <ExtraCurriculars />
      </div>
      <Contact />
      </React.Fragment>
    );
  }
}

export default App;
