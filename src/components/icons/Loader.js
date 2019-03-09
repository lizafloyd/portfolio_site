/** @module Spinner */
import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({width, height, fill, style}) => (
  <svg
    className="ui-spinner"
    width={width}
    height={height}
    viewBox={`0 0 100 100`}
    preserveAspectRatio="xMidYMid"
    style={style}
    role="img"
    aria-label="loader icon"
  >
    <rect x="0" y="0" width="100" height="100" fill="none" />
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(0 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(45 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0.125s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(90 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0.25s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(135 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0.375s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(180 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0.5s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(225 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0.625s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(270 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0.75s"
        repeatCount="indefinite"
      />
    </rect>
    <rect
      x="45"
      y="45"
      width="10"
      height="10"
      rx="6"
      ry="6"
      fill={fill}
      transform="rotate(315 50 50) translate(0 -30)"
    >
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        begin="0.875s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Loader.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#d3d3d3',
};

export default Loader;
