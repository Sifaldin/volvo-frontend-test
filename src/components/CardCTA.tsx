import React from 'react';
import { CarProp } from 'src/utils/types';
import { Block, Link } from 'vcc-ui';

export const CardCTA = ({ car }: CarProp) => {
  return (
    <div
      data-test-name="card-actions"
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Block extend={{ marginRight: 30 }}>
        <Link href={`/learn/${car.id}`} arrow="right">
          Learn
        </Link>
      </Block>
      <Link href={`/shop/${car.id}`} arrow="right">
        Shop
      </Link>
    </div>
  );
};

export default CardCTA;
