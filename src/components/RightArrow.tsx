import React from 'react';
import { ArrowProp } from 'src/utils/types';
import { IconButton } from 'vcc-ui';

export const RightArrow = ({ onClick, disabled }: ArrowProp) => {
  return (
    <div data-test-name="carousel-right-arrow">
      <IconButton
        onClick={onClick}
        aria-label="next"
        disabled={disabled}
        iconName="navigation-chevronforward"
        variant="outline"
      />
    </div>
  );
};

export default RightArrow;
