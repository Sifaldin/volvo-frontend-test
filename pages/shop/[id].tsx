import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getCarById } from 'src/engine/functions';
import { CarProp } from 'src/utils/types';
import CardUnit from 'src/views/CardUnit';

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
