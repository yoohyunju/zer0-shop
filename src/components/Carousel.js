import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="images/tableware.jpg" alt="" />
          </div>
          <div>
            <img src="images/kitchen.jpg" alt="" />
          </div>
          <div>
            <img src="images/tableware2.jpg" alt="" />
          </div>
          <div>
            <img src="images/bathroom.jpg" alt="" />
          </div>
          <div>
            <img src="images/shopping_basket.jpg" alt="" />
          </div>
          <div>
            <img src="images/bamboo_brush.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
