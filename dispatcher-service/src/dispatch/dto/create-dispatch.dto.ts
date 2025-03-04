import { IsString  } from 'class-validator';
export class CreateDispatchDto {
   

    @IsString()
    vehical_num:string;
  
    @IsString()
    city: string;
  
  
}
