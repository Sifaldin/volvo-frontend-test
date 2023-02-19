import React from 'react';
import { IconButton } from 'vcc-ui';

const LeftArrow = (props: any) => {
  return (
    <div
      className={props.className}
      style={{
        marginTop: '100px',
        display: 'flex',
        position: 'fixed',
        left: '50px',
      }}>
      <div>
        <IconButton
          onClick={props.onClick}
          disabled={props.className.includes('slick-disabled')}
          aria-label="previous"
          iconName="navigation-chevronback"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default LeftArrow;
