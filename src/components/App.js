import React, {Component} from 'react';
import logo from '../assets/logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        Grid Example Below:
        <div className="wrapper">
          <div className="row">
            <div className="extra-small-6">hello!</div>
            <div className="extra-small-6">extra small 6!</div>

            <div className="small-6 extra-small-12">hello!</div>
            <div className="small-6 extra-small-12">small 6!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
