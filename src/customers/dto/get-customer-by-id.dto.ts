import { IsInt } from 'class-validator';

export class GetCustomerByIdDto {
  @IsInt()
  id: number; 
}

