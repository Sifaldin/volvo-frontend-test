import React, { useState } from 'react';
import { getCarsByBodyType, getUniqueBodyTypes } from 'src/engine/functions';
import { CarsProp } from 'src/utils/types';
import { TabNav, TabNavItem } from 'vcc-ui';

import Carousel from './Carousel';

export const FilterTabs = ({ cars }: CarsProp) => {
  const [active, setActive] = useState(0);
  const [bodyType, setBodyType] = useState('All');

  return (
    <div className="stack-8">
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
  );
};

export default FilterTabs;
