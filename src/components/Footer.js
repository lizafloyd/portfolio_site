import React from 'react';
import PropTypes from 'prop-types';
import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import StackOverflowIcon from './icons/StackOverflowIcon';

/** Renders the global footer component.
 * @param {boolean} props.linkedin - Toggles the LinkedIn logo on/off.
 * @param {boolean} props.github - Toggles the Github logo on/off.
 * @param {boolean} props.twitter - Toggles the Twitter logo on/off.
 * @param {boolean} props.stackOverflow - Toggles the Stack Overflow logo on/off.
 * @param {boolean} props.copyright - Toggles the copyright text on/off.
 * @returns {string} - Returns a JSX representation of the Footer.
 */
const Footer = ({linkedIn, github, twitter, stackOverflow, copyright}) => (
  <footer
    id="footer"
    className="background-gray border-gray top"
    role="contentinfo"
  >
    <div className="container">
      <div className="margin-horizontal">
        <div className="icon-container margin-horizontal">
          {linkedIn && (
            <a href={process.env.REACT_APP_LINKEDIN_ANCHOR} role="button">
              <LinkedInIcon />
            </a>
          )}
          {github && (
            <a href={process.env.REACT_APP_GITHUB_ANCHOR} role="button">
              <GithubIcon />
            </a>
          )}
          {twitter && (
            <a href={process.env.REACT_APP_TWITTER_ANCHOR} role="button">
              <TwitterIcon />
            </a>
          )}

          {stackOverflow && (
            <a href={process.env.REACT_APP_STACKOVERFLOW_ANCHOR} role="button">
              <StackOverflowIcon />
            </a>
          )}
        </div>
        {copyright && (
          <span className="copyright">
            © {new Date().getFullYear()} {process.env.REACT_APP_AUTHOR_NAME}
          </span>
        )}
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  linkedIn: PropTypes.bool,
  github: PropTypes.bool,
  twitter: PropTypes.bool,
  stackOverflow: PropTypes.bool,
  copyright: PropTypes.bool,
};

Footer.defaultProps = {
  linkedIn: true,
  github: true,
  twitter: true,
  stackOverflow: true,
  copyright: true,
};

export default Footer;
