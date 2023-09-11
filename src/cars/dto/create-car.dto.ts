import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCarDTO {
  @IsString()
  readonly name: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  readonly model: string;
}