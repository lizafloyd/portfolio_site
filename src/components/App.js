import React, {Component} from 'react';
import logo from '../assets/logos/the_lily.png';
import './App.css';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import StackOverflowIcon from './icons/StackOverflowIcon';

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
          <img src={logo} className="App-logo" alt="The Lily Logo" />
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
          <LinkedInIcon /> <GithubIcon /> <StackOverflowIcon /> <TwitterIcon />
        </header>
        Grid Example Below:
        <div className="wrapper">
          This is Liza's Github username:{' '}
          {process.env.REACT_APP_GITHUB_USERNAME}
          This is Liza's Twitter username:{' '}
          {process.env.REACT_APP_TWITTER_USERNAME}
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
