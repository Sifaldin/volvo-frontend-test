import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import { getCarsByBodyType, getUniqueBodyTypes } from 'src/engine/functions';
import { CarsProp } from 'src/utils/types';
import { Grid, Row, TabNav, TabNavItem } from 'vcc-ui';

import CarCarousel from './CarCarousel';
import CarsCard from './CarsCard';

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

      <CarCarousel cars={getCarsByBodyType(cars, bodyType)} />
    </div>
  );
};

export default FilterTabs;
