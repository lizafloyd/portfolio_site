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
      <div className="icon-container padding-horizontal vertical-align">
        {linkedIn && (
          <a
            href={process.env.REACT_APP_LINKEDIN_ANCHOR}
            role="button"
            aria-label="linkedin link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        )}
        {github && (
          <a
            href={process.env.REACT_APP_GITHUB_ANCHOR}
            role="button"
            aria-label="github link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        )}
        {twitter && (
          <a
            href={process.env.REACT_APP_TWITTER_ANCHOR}
            role="button"
            aria-label="twitter link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        )}

        {stackOverflow && (
          <a
            href={process.env.REACT_APP_STACKOVERFLOW_ANCHOR}
            role="button"
            aria-label="stack overflow link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StackOverflowIcon />
          </a>
        )}

        {copyright && (
          <div className="copyright full-width text-right">
            © {new Date().getFullYear()} {process.env.REACT_APP_AUTHOR_NAME}
          </div>
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
