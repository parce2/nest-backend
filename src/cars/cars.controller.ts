import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {

  }
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get("/:id")
  getByIdCar(@Param('id', ParseUUIDPipe)  id: string) {
    return this.carsService.findIdCars(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDTO) {
    return this.carsService.createCar(createCarDto);
  }


  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateCarDTO) {
    return this.carsService.updateCar(id, body);
  }


  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return this.carsService.deleteCar(id);
  }
}
