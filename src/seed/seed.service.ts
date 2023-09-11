import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { BRAND_SEED } from './data/brand.seed';


@Injectable()
export class SeedService {
  
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
    ) {
  }
  
  populateDB(): string {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    return 'Seed execute'
  }
}
