import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import { carouselConfig } from 'src/engine/config';
import { Cars } from 'src/utils/types';
import { Block } from 'vcc-ui';

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
    <Block extend={{ padding: '2rem 1rem' }}>
      <Slider {...carouselConfigWithCustomArrows}>
        {cars?.map((car, index) => (
          <CardUnit key={index} car={car} />
        ))}
      </Slider>
    </Block>
  );
};

export default Carousel;
