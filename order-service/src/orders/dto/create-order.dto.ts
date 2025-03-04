import { Type } from 'class-transformer';
import { IsArray, IsInt, isInt, ValidateNested, IsString } from 'class-validator';

class OrderItemDto {
  @IsInt()
  productId: number;
  @IsInt()
  price: number;
  @IsInt()
  quantity: number;
  @IsString()
  city: string;
}

export class createOrderDto {
  @IsInt()
  customerId: number;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  @IsString()
  city:string;
  items: OrderItemDto[];
}
