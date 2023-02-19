export type Car = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export type Cars = Car[] | undefined;

export interface CarProp {
  car: Car;
}

export interface CarsProp {
  cars: Cars;
}

export interface ArrowProp {
  onClick: () => void;
}

export enum QueryKeys {
  GET_CARS = 'get_cars',
}
