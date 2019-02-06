import React from 'react';
import Slider from 'react-slick';
import leparisien from '../assets/logos/leparisien.png';
import nzme from '../assets/logos/nzme.png';
import raycom from '../assets/logos/raycom.png';
import santafe from '../assets/logos/santafe.png';
import sightline from '../assets/logos/sightline.png';
import tgam from '../assets/logos/tgam.png';
import lily from '../assets/logos/the_lily.png';
import post from '../assets/logos/washington_post.png';
import wweek from '../assets/logos/wweek_dark.png';

/**
 * Slider settings.
 */
export const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplaySpeed: 3000,
};

/**
 * Renders the main App components.
 * @returns {string} - Returns JSX representation of the PartnerSlider component.
 */
const PartnerSlider = () => (
  <Slider {...settings}>
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
      <img src={nzme} className="responsive-image" alt="New Zealand Herald" />
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
