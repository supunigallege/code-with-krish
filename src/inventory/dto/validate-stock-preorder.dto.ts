
import { IsInt } from 'class-validator';

export class ValidateStockBeforeOrderDto {
  @IsInt()
  id: number; 

  @IsInt()
  quantity: number; 
}
