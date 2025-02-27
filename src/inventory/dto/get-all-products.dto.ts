
import { IsInt } from 'class-validator';

export class GetProductByIdDto {
  @IsInt()
  id: number; 
}
