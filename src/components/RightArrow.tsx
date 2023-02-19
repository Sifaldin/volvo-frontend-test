import React from 'react';
import { IconButton } from 'vcc-ui';

export const RightArrow = (props: any) => {
  return (
    <div
      className={props.className}
      style={{
        marginTop: '100px',
        display: 'flex',
        position: 'fixed',
        right: '100px',
      }}>
      <div>
        <IconButton
          onClick={props.onClick}
          disabled={props.className.includes('slick-disabled')}
          aria-label="next"
          iconName="navigation-chevronforward"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default RightArrow;
