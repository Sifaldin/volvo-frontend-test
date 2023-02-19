import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCars, getCarsByBodyType, getUniqueBodyTypes } from 'src/utils/functions';
import { QueryKeys } from 'src/utils/types';
import { Block, Spinner, TabNav, TabNavItem, Text } from 'vcc-ui';

import Carousel from './Carousel';

export const FilterTabs = () => {
  const [active, setActive] = useState(0);
  const [bodyType, setBodyType] = useState('All');

  // fetch data client side
  const { data: cars, isSuccess, isLoading } = useQuery([QueryKeys.GET_CARS], fetchCars);

  if (isLoading) {
    return (
      <Block
        extend={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}>
        <Spinner size={48} />
      </Block>
    );
  }
  return isSuccess ? (
    <div className="stack-8" data-test-name="filter-tabs">
      <TabNav enableLineTransition>
        {getUniqueBodyTypes(cars)?.map((bodyType, index) => {
          return (
            <TabNavItem
              key={index}
              isActive={active === index}
              onClick={() => {
                setActive(index);
                setBodyType(bodyType);
              }}>
              {`${bodyType.toUpperCase()} (${getCarsByBodyType(cars, bodyType)?.length})`}
            </TabNavItem>
          );
        })}
      </TabNav>

      <Carousel cars={getCarsByBodyType(cars, bodyType)} />
    </div>
  ) : (
    <Text>Something went wrong...</Text>
  );
};

export default FilterTabs;
