import Image from 'next/image';
import React from 'react';
import { CarProp } from 'src/utils/types';
import { Card, CardContent, Flex, Text } from 'vcc-ui';

import CardCTA from './CardCTA';

export const CardUnit = ({ car }: CarProp) => {
  return (
    <div
      className="stack-8"
      data-test-name="single-card-unit"
      style={{ margin: '8px', maxWidth: '400px' }}>
      <Card>
        <CardContent>
          <Text variant="bates">{car.bodyType.toUpperCase()}</Text>
          <Text subStyle="emphasis">
            {car.modelName}{' '}
            <Text variant="bates" subStyle="standard">
              {car.modelType}
            </Text>
          </Text>
        </CardContent>
        <Flex
          extend={{
            justifyContent: 'center',
          }}>
          <Image
            alt={`Volvo ${car.modelName}`}
            src={car.imageUrl}
            placeholder="blur"
            blurDataURL="/images/volvo-wordmark-black.svg"
            priority
            width={366}
            height={288}
          />
        </Flex>
      </Card>
      <CardCTA car={car} />
    </div>
  );
};

export default CardUnit;
