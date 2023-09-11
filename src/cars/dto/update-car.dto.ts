import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateCarDTO {

  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  @IsOptional()
  readonly model?: string;
}