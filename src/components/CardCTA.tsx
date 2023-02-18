import React from 'react';
import { CarProp } from 'src/utils/types';
import { Block, Flex, Link } from 'vcc-ui';

export const CardCTA = ({ car }: CarProp) => {
  return (
    <Flex
      className={'flex-items-center'}
      extend={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Block extend={{ marginRight: 30 }}>
        <Link href={`/learn/${car.id}`} arrow="right">
          Learn
        </Link>
      </Block>
      <Link href={`/shop/${car.id}`} arrow="right">
        Shop
      </Link>
    </Flex>
  );
};

export default CardCTA;
