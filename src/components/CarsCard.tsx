import Image from 'next/image';
import React from 'react';
import { CarProp } from 'src/utils/types';
import { Card, CardContent, Flex, Spacer, Text } from 'vcc-ui';

import CardCTA from './CardCTA';

export const CarsCard = ({ car }: CarProp) => {
  return (
    <div className="stack-8">
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

export default CarsCard;
