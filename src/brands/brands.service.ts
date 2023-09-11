import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
/*     {
      id: uuid(),
      createdAt: new Date().getTime(),
      name: 'Toyota',
    }, */
  ];

  create(createBrandDto: CreateBrandDto): Brand {
    const brand: Brand = {
      ...createBrandDto,
      id: uuid(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new BadRequestException(`Brand ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
   let brand = this.findOne(id);

     this.brands = this.brands.map((brand) => {
      if(brand.id === id) {
        brand.updatedAt = new Date().getTime();
        return { ...brand, ...updateBrandDto, id }
      }

      return brand;
    });

    return brand
  }

  remove(id: string) {
    return this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeedData(brand: Brand[]) {
    this.brands = brand;
  }
}
