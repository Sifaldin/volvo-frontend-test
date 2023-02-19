import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import CardUnit from 'src/components/CardUnit';
import { getCarById } from 'src/utils/functions';
import { CarProp } from 'src/utils/types';

import cars from '../../public/api/cars.json';

const Shop = ({ car }: CarProp) => {
  return (
    <>
      <Head>
        <title>{car.modelName}</title>
      </Head>
      <h1>Lets get this ride customised just for you...</h1>
      <CardUnit car={car} />
    </>
  );
};

export const getStaticProps: GetStaticProps<CarProp> = ({ params }) => {
  const defaultCar = {
    id: '',
    modelName: '',
    bodyType: '',
    modelType: '',
    imageUrl: '',
  };
  const car = getCarById(cars, params?.id as string);
  return {
    props: {
      car: car || defaultCar,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = cars.map((car) => ({
    params: { id: car.id },
  }));

  return { paths, fallback: false };
};

export default Shop;
