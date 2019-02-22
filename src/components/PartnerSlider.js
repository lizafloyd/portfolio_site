import React from 'react';
import Slider from 'react-slick';
import leparisien from '../assets/logos/leparisien.png';
import raycom from '../assets/logos/raycom.png';
import santafe from '../assets/logos/santafe.png';
import sightline from '../assets/logos/sightline.png';
import tgam from '../assets/logos/tgam.png';
import lily from '../assets/logos/the_lily.png';
import post from '../assets/logos/washington_post.png';
import wweek from '../assets/logos/wweek_dark.png';

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
        <img src={partner.src} alt={partner.alt} className="responsive-image" />
      </div>
    ))}
    <div>
      <img src={leparisien} className="responsive-image" alt="Le Parisien" />
    </div>
    <div>
      <img
        src={lily}
        className="responsive-image"
        alt="The Lily, a publication of the Washington Post"
      />
    </div>
    <div>
      <img src={raycom} className="responsive-image" alt="Raycom Media Group" />
    </div>
    <div>
      <img src={santafe} className="responsive-image" alt="Santa Fe Reporter" />
    </div>
    <div>
      <img
        src={sightline}
        className="responsive-image"
        alt="Sightline Media Group (MCO)"
      />
    </div>
    <div>
      <img
        src={tgam}
        className="responsive-image"
        alt="Toronto Globe and Mail"
      />
    </div>
    <div>
      <img src={post} className="responsive-image" alt="Washington Post" />
    </div>
    <div>
      <img src={wweek} className="responsive-image" alt="Wilamette Week" />
    </div>
  </Slider>
);

export default PartnerSlider;
