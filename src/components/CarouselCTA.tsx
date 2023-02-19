import React from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import { Block, IconButton } from 'vcc-ui';

export const CarouselCTA = ({ next, previous, carouselState }: ButtonGroupProps) => {
  const state = carouselState;
  if (state && previous && next) {
    const previousDisabled = state?.currentSlide === 0;
    const nextDisabled = state.currentSlide + state.slidesToShow >= state.totalItems;
    const isHidden = state.deviceType === 'mobile';

    if (isHidden) {
      return null;
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'fixed',
          right: '20px',
        }}>
        <div
          style={{
            marginRight: '20px',
          }}>
          <IconButton
            onClick={previous}
            disabled={previousDisabled}
            aria-label="previous"
            iconName="navigation-chevronback"
            variant="outline"
          />
        </div>
        <div>
          <IconButton
            onClick={next}
            disabled={nextDisabled}
            aria-label="next"
            iconName="navigation-chevronforward"
            variant="outline"
          />
        </div>
      </div>
    );
  }
  return null;
};
