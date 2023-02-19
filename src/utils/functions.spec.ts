/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect } from '@jest/globals';

import { getCarById, getCarsByBodyType, getUniqueBodyTypes } from './functions';

describe('Filter functions - happy scenario', () => {
  it('returns unique bodyTypes from an array of cars', () => {
    const testData = [
      {
        id: 'xc90-recharge',
        modelName: 'XC90 Recharge',
        bodyType: 'suv',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/xc90_recharge.jpg',
      },
      {
        id: 'xc60-recharge',
        modelName: 'XC60 Recharge',
        bodyType: 'suv',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/xc60_recharge.jpg',
      },
      {
        id: 'xc40-recharge',
        modelName: 'XC40 Recharge',
        bodyType: 'suv',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/xc40_recharge.jpg',
      },
      {
        id: 'xc40-bev',
        modelName: 'XC40 Recharge',
        bodyType: 'suv',
        modelType: 'pure electric',
        imageUrl: '/images/xc40_bev.jpg',
      },
      {
        id: 'v90-recharge',
        modelName: 'V90 Recharge',
        bodyType: 'estate',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/v90_recharge.jpg',
      },
      {
        id: 'v60-recharge',
        modelName: 'V60 Recharge',
        bodyType: 'estate',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/v60_recharge.jpg',
      },
    ];

    expect(getUniqueBodyTypes(testData)).toEqual(['All', 'suv', 'estate']);
  });

  it('returns different cars base on bodyType', () => {
    const testData = [
      {
        id: 'xc90-recharge',
        modelName: 'XC90 Recharge',
        bodyType: 'suv',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/xc90_recharge.jpg',
      },
      {
        id: 's60-recharge',
        modelName: 'S60 Recharge',
        bodyType: 'sedan',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/s60_recharge.jpg',
      },
    ];

    expect(getCarsByBodyType(testData, 'suv')).toEqual([
      {
        id: 'xc90-recharge',
        modelName: 'XC90 Recharge',
        bodyType: 'suv',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/xc90_recharge.jpg',
      },
    ]);
  });

  it('returns a car based on carId', () => {
    const testData = [
      {
        id: 'xc90-recharge',
        modelName: 'XC90 Recharge',
        bodyType: 'suv',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/xc90_recharge.jpg',
      },
      {
        id: 's60-recharge',
        modelName: 'S60 Recharge',
        bodyType: 'sedan',
        modelType: 'plug-in hybrid',
        imageUrl: '/images/s60_recharge.jpg',
      },
    ];

    expect(getCarById(testData, 's60-recharge')).toEqual({
      id: 's60-recharge',
      modelName: 'S60 Recharge',
      bodyType: 'sedan',
      modelType: 'plug-in hybrid',
      imageUrl: '/images/s60_recharge.jpg',
    });
  });
});
describe('Filter functions - unhappy scenario', () => {
  const badData: any = {
    id: {
      id: '',
      modelName: '',
      bodyType: '',
      modelType: '',
      imageUrl: '',
    },
    bodyType: '',
    modelType: '',
    imageUrl: '',
  };

  const emptyArray: any[] = [];
  it('getUniqueBodyTypes returns null on bad data or empty array', () => {
    expect(getUniqueBodyTypes(badData)).toBeNull();
    expect(getUniqueBodyTypes(emptyArray)).toBeNull();
  });
  it('getCarsByBodyType returns null on bad data or empty array', () => {
    expect(getCarsByBodyType(badData, '')).toBeNull();
    expect(getCarsByBodyType(emptyArray, '')).toBeNull();
  });
  it('getCarById returns null on bad data or empty aray', () => {
    expect(getCarById(badData, '123abc')).toBeNull();
    expect(getCarById(emptyArray, '')).toBeNull();
  });
});
