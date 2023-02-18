import 'react-multi-carousel/lib/styles.css';

import React, { useEffect, useRef } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import { Cars } from 'src/utils/types';
import { Block } from 'vcc-ui';

import { CarouselCTA } from './CarouselCTA';
import CarsCard from './CarsCard';

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: Infinity, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 90,
  },
};

export const CarCarousel = ({ cars }: { cars: Cars | null }) => {
  const ref = useRef<Carousel>(null);

  useEffect(() => {
    ref.current?.goToSlide(0);
  }, [cars]);

  return (
    <Block extend={{ padding: '2rem 1rem' }}>
      <Carousel
        ref={ref}
        draggable
        pauseOnHover
        minimumTouchDrag={80}
        partialVisible={true}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CarouselCTA />}
        showDots={true}
        renderDotsOutside={true}
        ssr={true}
        deviceType={'desktop'}>
        {cars?.map((car, index) => (
          <Block key={index} extend={{ margin: 5 }}>
            <CarsCard key={index} car={car} />
          </Block>
        ))}
      </Carousel>
    </Block>
  );
};

export default CarCarousel;
