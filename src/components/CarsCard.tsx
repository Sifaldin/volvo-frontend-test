import Image from 'next/image';
import React from 'react';
import { CardProps } from 'src/utils/types';
import { Card, CardContent, Flex, Spacer, Text } from 'vcc-ui';

export const CarsCard = ({ car }: CardProps) => {
  return (
    <>
      <Card>
        <CardContent>
          <Text variant="bates">{car.bodyType}</Text>
          <Spacer />

          <Text subStyle="emphasis">{car.modelName} </Text>
          <Spacer />

          <Text subStyle="inline-link">{car.modelType}</Text>
        </CardContent>
        <Flex
          extend={{
            justifyContent: 'center',
            padding: 2,
          }}>
          <Image src={car.imageUrl} alt={`Volvo ${car.modelName}`} width={260} height={200} />
        </Flex>
      </Card>
    </>
  );
};

export default CarsCard;
