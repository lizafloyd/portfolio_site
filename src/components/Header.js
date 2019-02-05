import React from 'react';
import profile from '../assets/images/profile.jpg';
/**
 * Renders the ContactForm component.
 * @returns {string} - Returns JSX representation of the Header component.
 */
const Header = () => (
  <div className="header row align-center margin-horizontal">
    <div className="header-text small-7">
      <h1 className="title">Hi, Friend!</h1>
      <h2 className="subtitle">I'm Liza Floyd.</h2>
      <h2 className="subtitle">I make websites.</h2>
    </div>
    <div className="header-image small-5">
      <img src={profile} className="responsive-image" alt="Placeholder" />
    </div>
  </div>
);

export default Header;
