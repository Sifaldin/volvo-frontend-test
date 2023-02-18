import { GetStaticProps } from 'next';
import React from 'react';
import FilterTabs from 'src/components/FilterTabs';
import { CarsProp } from 'src/utils/types';

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
