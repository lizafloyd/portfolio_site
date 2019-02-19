import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

/** Renders the Header component.
 * @param {boolean} props.skipLink - Toggles the a11y skip link on/off.
 * @param {string} props.bannerClasses - A string of classes to be used for the banner.
 * @param {string} props.profileImage - The URL of the profile image.
 * @param {string} props.profileAlt - A string describing the profile image.
 * @returns {string} - Returns a JSX representation of the Header.
 */
const Header = ({skipLink, bannerClasses, profileImage, profileAlt}) => (
  <Fragment>
    {skipLink && (
      <a href="#main" className="skip">
        Skip to Main Content
      </a>
    )}
    <header id="top" role="banner">
      <div className={bannerClasses}>
        <div className="container relative">
          <img
            src={profileImage}
            alt={profileAlt || ''}
            className="small-3 extra-small-12 responsive-image header-image"
          />
        </div>
      </div>
    </header>
  </Fragment>
);

Header.propTypes = {
  profileImage: PropTypes.string.isRequired,
  profileAlt: PropTypes.string,
  bannerClasses: PropTypes.string,
  skipLink: PropTypes.bool,
};

Header.defaultProps = {
  skipLink: true,
};

export default Header;
