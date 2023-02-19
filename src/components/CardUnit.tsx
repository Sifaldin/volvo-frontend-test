import Image from 'next/image';
import React from 'react';
import { CarProp } from 'src/utils/types';
import { Card, CardContent, Flex, Text } from 'vcc-ui';

import CardCTA from './CardCTA';

export const CardUnit = ({ car }: CarProp) => {
  return (
    <div className="stack-8" data-test-name="single-card-unit">
      <Card>
        <CardContent>
          <Text variant="bates">{car.bodyType.toUpperCase()}</Text>
          <Text subStyle="emphasis">
            {car.modelName}{' '}
            <Text variant="bates" subStyle="inline-link">
              {car.modelType}
            </Text>
          </Text>
        </CardContent>
        <Flex
          extend={{
            justifyContent: 'center',
          }}>
          <Image src={car.imageUrl} alt={`Volvo ${car.modelName}`} width={450} height={350} />
        </Flex>
      </Card>
      <CardCTA car={car} />
    </div>
  );
};

export default CardUnit;
