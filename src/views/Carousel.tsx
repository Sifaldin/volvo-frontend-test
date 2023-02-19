import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import Slider from 'react-slick';
import LeftArrow from 'src/components/LeftArrow';
import RightArrow from 'src/components/RightArrow';
import { carouselConfig } from 'src/utils/config';
import { Cars } from 'src/utils/types';
import { Block } from 'vcc-ui';

import CardUnit from '../components/CardUnit';

export const Carousel = ({ cars }: { cars: Cars | null }) => {
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  /**
   * since we know that there are 4 slides being rendered on desktop
   * and that when we go smaller we display dots
   * we can know when to disable the arrow based on the index of current card
   * minus the length of the cars array - 4 for the 4 slides being already rendered
   */
  const settings = {
    ...carouselConfig,
    afterChange: (index: number) => {
      if (index === 0) {
        setDisableLeft(true);
      }
      if (cars && index === cars?.length - 4) {
        setDisableRight(true);
      }
    },
    beforeChange: (_: number, next: number) => {
      if (cars && next === cars?.length - 4) {
        setDisableRight(true);
      } else {
        setDisableLeft(false);
        setDisableRight(false);
      }
    },
  };
  const slider = React.useRef<Slider>(null);
  return (
    <div data-test-name="carousel">
      <Slider ref={slider} {...settings}>
        {cars?.map((car, index) => (
          <CardUnit key={index} car={car} />
        ))}
      </Slider>
      <Block
        extend={{
          marginTop: 20,
          display: 'flex',
          position: 'fixed',
          right: 50,
          '@media (max-width: 950px)': {
            display: 'none',
          },
        }}>
        <LeftArrow onClick={() => slider?.current?.slickPrev()} disabled={disableLeft} />
        <RightArrow onClick={() => slider?.current?.slickNext()} disabled={disableRight} />
      </Block>
    </div>
  );
};

export default Carousel;
