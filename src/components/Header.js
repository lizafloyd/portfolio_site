import React from 'react';
import profile from '../assets/images/profile.jpg';
/**
* Renders the main App components.
*/
const Header = () => (
  <div className="header row align-center">
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
