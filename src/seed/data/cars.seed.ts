import { ICar } from "src/cars/interface/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: ICar[] = [
  {
    id: uuid(),
    name: "toyota",
    model: "corolla"
  },
  {
    id: uuid(),
    name: "honda",
    model: "civic"
  },
  {
    id: uuid(),
    name: "Jeep",
    model: "cherocke"
  }
]