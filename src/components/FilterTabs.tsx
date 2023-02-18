import React, { useState } from 'react';
import { getCarsByBodyType, getUniqueBodyTypes } from 'src/engine/functions';
import { FilterTabsProps } from 'src/utils/types';
import { Grid, Row, TabNav, TabNavItem } from 'vcc-ui';

import CarsCard from './CarsCard';

export const FilterTabs = ({ cars }: FilterTabsProps) => {
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
              {`${bodyType} (${getCarsByBodyType(cars, bodyType)?.length})`}
            </TabNavItem>
          );
        })}
      </TabNav>
      <Grid>
        <Row align="center">
          {getCarsByBodyType(cars, bodyType)?.map((car, index) => (
            <CarsCard key={index} car={car} />
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default FilterTabs;
