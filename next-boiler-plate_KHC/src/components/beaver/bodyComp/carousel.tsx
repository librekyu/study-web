import React, { Component } from 'react';
import styled from '@src/commons/style/themes/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  Slide1 = styled.div`
    background: #b359c5;
    width: 100%;
    height: 350px;
  `;
  Slide2 = styled.div`
    background: orange;
    width: 100%;
    height: 350px;
  `;
  Slide3 = styled.div`
    background: #00ffd581;
    width: 100%;
    height: 350px;
  `;

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <this.Slide1 />
          <this.Slide2 />
          <this.Slide3 />
        </Slider>
      </div>
    );
  }
}
