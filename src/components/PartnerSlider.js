import React from "react";
import Slider from "react-slick";
import placeholder from '../assets/images/placeholder.png';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <Slider {...settings}>
        <div>
        <img src={placeholder} className="responsive-image" alt="Placeholder" />
        </div>
        <div>
        <img src={placeholder} className="responsive-image" alt="Placeholder" />
        </div>
        <div>
        <img src={placeholder} className="responsive-image" alt="Placeholder" />
        </div>
        <div>
        <img src={placeholder} className="responsive-image" alt="Placeholder" />
        </div>
        <div>
        <img src={placeholder} className="responsive-image" alt="Placeholder" />
        </div>
        <div>
        <img src={placeholder} className="responsive-image" alt="Placeholder" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider