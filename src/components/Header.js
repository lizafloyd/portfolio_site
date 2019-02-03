import React, {Component} from 'react';
import placeholder from '../assets/images/placeholder.png';
import './App.css';
/**
 * Renders the main App components.
 */
class Header extends Component {
  /** Renders the App component.
   * @returns {string} - Returns JSX representation of the App component.
   */
  render() {
    return (
      <div className="header row">
        <div className="header-text small-6">
          <h1>Hi, Friend!</h1>
          <h2>I'm Liza Floyd.</h2>
          <h2>I make websites.</h2>
        </div>
        <div className="header-image small-6">
          <img src={placeholder} className="responsive-image" alt="Placeholder" />
        </div>
      </div>
    );
  }
}

export default Header;
