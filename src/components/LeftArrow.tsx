import React from 'react';
import { ArrowProp } from 'src/utils/types';
import { IconButton } from 'vcc-ui';

const LeftArrow = ({ className, onClick }: ArrowProp) => {
  if (onClick && className) {
    return (
      <div
        className={className}
        style={{
          marginTop: '100px',
          display: 'flex',
          position: 'fixed',
          left: '50px',
        }}>
        <div data-test-name="carousel-left-arrow">
          <IconButton
            onClick={onClick}
            disabled={className.includes('slick-disabled')}
            aria-label="previous"
            iconName="navigation-chevronback"
            variant="outline"
          />
        </div>
      </div>
    );
  }
  return null;
};

export default LeftArrow;
