import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import { carouselConfig } from 'src/engine/config';
import { Cars } from 'src/utils/types';

import LeftArrow from '../components/LeftArrow';
import RightArrow from '../components/RightArrow';
import CardUnit from './CardUnit';

export const Carousel = ({ cars }: { cars: Cars | null }) => {
  const carouselConfigWithCustomArrows = {
    ...carouselConfig,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };
  return (
    <div style={{ padding: '2rem 1rem' }} data-test-name="carousel">
      <Slider {...carouselConfigWithCustomArrows}>
        {cars?.map((car, index) => (
          <CardUnit key={index} car={car} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
