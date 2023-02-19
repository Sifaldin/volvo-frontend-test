import { GetStaticProps } from 'next';
import React from 'react';
import { CarsProp } from 'src/utils/types';
import FilterTabs from 'src/views/FilterTabs';

import cars from '../public/api/cars.json';

const ProductsPage = ({ cars }: CarsProp) => {
  return (
    <>
      <FilterTabs cars={cars} />
    </>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps<CarsProp> = async () => {
  return {
    props: {
      cars,
    },
  };
};
