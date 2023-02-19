import React from 'react';
import { ArrowProp } from 'src/utils/types';
import { IconButton } from 'vcc-ui';

const LeftArrow = ({ onClick, disabled }: ArrowProp) => {
  return (
    <div data-test-name="carousel-left-arrow" style={{ marginRight: '10px' }}>
      <IconButton
        onClick={onClick}
        aria-label="previous"
        disabled={disabled}
        iconName="navigation-chevronback"
        variant="outline"
      />
    </div>
  );
};

export default LeftArrow;
