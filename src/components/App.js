import React, {Component} from 'react';
import Header from './Header'
import './App.css';

/**
* Renders the main App components.
*/
class App extends Component {
  /** Renders the App component.
  * @returns {string} - Returns JSX representation of the App component.
  */
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Header />
      </header>

      </div>
    );
  }
}

export default App;
