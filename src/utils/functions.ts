import { Car, Cars } from 'src/utils/types';

export const getUniqueBodyTypes = (cars: Cars) => {
  if (Array.isArray(cars) && cars.length > 0) {
    return ['All', ...new Set(cars.map((car: Car) => car.bodyType))];
  }
  return null;
};
export const getCarsByBodyType = (cars: Cars, bodyType: string) => {
  if (Array.isArray(cars) && cars.length > 0) {
    return bodyType === 'All' ? cars : cars.filter((car) => car.bodyType === bodyType);
  }
  return null;
};

export const getCarById = (cars: Cars, id: string) =>
  Array.isArray(cars) && cars.length > 0 ? cars.find((car) => car.id === id) : null;

export const fetchCars = async (): Promise<Cars> => {
  const res = await fetch('/api/cars.json');
  if (!res.ok) {
    return Promise.reject(new Error('Error fetching data...'));
  }
  return await res.json();
};
