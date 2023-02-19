import React from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import { Block, IconButton } from 'vcc-ui';

export const CarouselCTA = ({ next, previous, carouselState }: ButtonGroupProps) => {
  const state = carouselState;
  if (state) {
    const previousDisabled = state?.currentSlide === 0;
    const nextDisabled = state.currentSlide + state.slidesToShow >= state.totalItems;
    const isHidden = state.deviceType === 'mobile';

    if (isHidden) {
      return null;
    }

    return (
      <div
        style={{
          position: 'fixed',
          right: '20px',
        }}>
        <IconButton
          onClick={() => previous && previous()}
          disabled={previousDisabled}
          aria-label="previous"
          iconName="navigation-chevronback"
          variant="outline"
        />

        <IconButton
          onClick={() => next && next()}
          disabled={nextDisabled}
          aria-label="next"
          iconName="navigation-chevronforward"
          variant="outline"
        />
      </div>
    );
  }
  return null;
};
