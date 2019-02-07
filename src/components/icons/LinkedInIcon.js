import React from 'react';
import PropTypes from 'prop-types';

/** Renders an inline SVG of the LinkedIn logo.
 * @param {string} props.height - The height of the SVG in pixels.
 * @param {string} props.width - The width of the SVG in pixels.
 * @param {string} props.fill - The color hex code that the SVG should be.
 * @returns {string} - Returns a JSX representation of the LinkedIn logo.
 */
const LinkedInIcon = ({height, width, fill}) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    height={height}
    width={width}
    fill={fill}
  >
    <path
      d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
      fillRule="nonzero"
    />
  </svg>
);

LinkedInIcon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

LinkedInIcon.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#5b5b5b',
};

export default LinkedInIcon;
