import React from 'react';
import { ArrowProp } from 'src/utils/types';
import { IconButton } from 'vcc-ui';

export const RightArrow = ({ className, onClick }: ArrowProp) => {
  if (onClick && className) {
    return (
      <div
        className={className}
        style={{
          marginTop: '100px',
          display: 'flex',
          position: 'fixed',
          right: '100px',
        }}>
        <div>
          <IconButton
            onClick={onClick}
            disabled={className.includes('slick-disabled')}
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

export default RightArrow;
