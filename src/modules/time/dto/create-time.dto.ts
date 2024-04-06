import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateTimeDto {
  @IsNotEmpty()
  @IsDateString()
  time: Date;

  @IsNotEmpty()
  status: boolean;
}
