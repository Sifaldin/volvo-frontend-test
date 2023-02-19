import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import ArrowsWrapper from 'src/components/ArrowsWrapper';
import LeftArrow from 'src/components/LeftArrow';
import RightArrow from 'src/components/RightArrow';
import { carouselConfig } from 'src/engine/config';
import { Cars } from 'src/utils/types';

import CardUnit from '../components/CardUnit';

export const Carousel = ({ cars }: { cars: Cars | null }) => {
  const slider = React.useRef<Slider>(null);
  return (
    <div
      data-test-name="carousel"
      style={{ marginTop: '10px', marginRight: '10px', marginLeft: '10px' }}>
      <Slider ref={slider} {...carouselConfig}>
        {cars?.map((car, index) => (
          <CardUnit key={index} car={car} />
        ))}
      </Slider>
      <ArrowsWrapper>
        <LeftArrow onClick={() => slider?.current?.slickPrev()} />
        <RightArrow onClick={() => slider?.current?.slickNext()} />
      </ArrowsWrapper>
    </div>
  );
};

export default Carousel;
