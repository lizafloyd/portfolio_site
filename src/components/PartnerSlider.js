import React from 'react';
import Slider from 'react-slick';
import {partners} from '../constants';

/**
 * Slider settings.
 */
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  centerMode: true,
  fade: true,
};

/**
 * Renders the main App components.
 * @returns {string} - Returns JSX representation of the PartnerSlider component.
 */
const PartnerSlider = () => (
  <Slider {...settings}>
    {partners.map((partner, index) => (
      <div key={index}>
        <a className="liza" href={partner.href} target="_blank" rel="noopener noreferrer">
          <img
            src={partner.src}
            alt={partner.alt}
            className="responsive-image"
          />
        </a>
      </div>
    ))}
  </Slider>
);

export default PartnerSlider;
