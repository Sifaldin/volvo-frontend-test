import React from 'react';
import FilterTabs from 'src/components/FilterTabs';

import cars from '../public/api/cars.json';

const ProductsPage = () => {
  return (
    <>
      <FilterTabs cars={cars} />
    </>
  );
};

export default ProductsPage;
