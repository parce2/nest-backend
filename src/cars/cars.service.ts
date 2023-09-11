import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { ICar } from './interface/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
  private cars: ICar[] = [
/*     {
      id: uuid(),
      name: 'Honda',
      model: 'navi',
    },
    { id: uuid(), name: 'Jeep', model: 'cheroki' },
    {
      id: uuid(),
      name: 'BMW',
      model: 'aw4',
    }, */
  ];

  findAll() {
    return this.cars;
  }

  findIdCars(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  createCar(create: CreateCarDTO) {
    this.cars.push({
      id: uuid(),
      ...create,
    });

    return this.cars;
  }

  updateCar(id: string, updateCarDto: UpdateCarDTO) {
    let carFind = this.findIdCars(id);

    if(updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(` Car id not valid inside body`)

    this.cars = this.cars.map((car) => {
      if (car.id === id) return carFind = { ...carFind, ...updateCarDto,id};
      
      return car;
    });

    return carFind;
  }

  deleteCar(id: string) {
    this.findIdCars(id)
  //  this.cars = this.cars.filter(car => car.id !== id);
     return this.cars.splice(this.cars.findIndex((data) => data.id === id), 1);
  }

  fillCarsWithSeedData(cars: ICar[]) {
    this.cars = cars;
  }
}
