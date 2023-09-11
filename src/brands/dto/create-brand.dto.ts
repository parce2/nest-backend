import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateBrandDto {

  @IsString()
  @MinLength(5)
  name: string
}
