import React from 'react';
import PropTypes from 'prop-types';

/** Renders an inline SVG of the Stack Overflow logo.
 * @param {string} height - The height of the SVG in pixels.
 * @param {string} width - The width of the SVG in pixels.
 * @param {string} fill - The color hex code that the SVG should be.
 * @returns {string} - Returns a JSX representation of the StackOverflow logo.
 */
const StackOverflowIcon = ({height, width, fill}) => (
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
    <path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693h1.42v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.46.3-1.38L4.55 8.54l-.302 1.38zm.906-3.37l6.47 3.02.602-1.3-6.47-3.02-.602 1.29zm1.81-3.19l5.478 4.57.906-1.08L7.87 2.28l-.9 1.078zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z" />
  </svg>
);

StackOverflowIcon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

StackOverflowIcon.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#5b5b5b',
};

export default StackOverflowIcon;
