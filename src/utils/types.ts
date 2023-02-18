export type Car = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export type Cars = Car[];

export interface CardProps {
  car: Car;
}

export interface FilterTabsProps {
  cars: Cars;
}
