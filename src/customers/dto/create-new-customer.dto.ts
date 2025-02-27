// create-customer.dto.ts
import { IsString, IsInt , IsEmail, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string; 
  @IsOptional()
  @IsString()
  address?: string; 
}







