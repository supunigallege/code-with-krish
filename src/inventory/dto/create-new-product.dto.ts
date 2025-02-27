
import { IsString, IsInt, IsDecimal } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  name: string; 

  @IsDecimal()
  price: number; 

  @IsInt()
  quantity: number; 
}
