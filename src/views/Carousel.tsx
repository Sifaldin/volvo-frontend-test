import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import { Cars } from 'src/utils/types';
import { Block } from 'vcc-ui';

import LeftArrow from '../components/LeftArrow';
import RightArrow from '../components/RightArrow';
import CardUnit from './CardUnit';

const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        arrows: true,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

export const Carousel = ({ cars }: { cars: Cars | null }) => {
  return (
    <Block extend={{ padding: '2rem 1rem' }}>
      <Slider {...settings}>
        {cars?.map((car, index) => (
          <Block key={index} extend={{ margin: 5 }}>
            <CardUnit key={index} car={car} />
          </Block>
        ))}
      </Slider>
    </Block>
  );
};

export default Carousel;
