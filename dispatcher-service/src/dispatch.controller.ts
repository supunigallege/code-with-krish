import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { dispatchService } from './dispatch.service';
import { CreateDispatchDto } from './dispatch/dto/create-dispatch.dto';
import { dispatch } from './dispatch/entity/dispatch.entity';

@Controller('customers')
export class DispatchController {
  constructor(private readonly DispatchService: dispatchService) {}

  @Post()
  async createDispatch(
    @Body() createDispatchDto: CreateDispatchDto,
  ): Promise<dispatch> {
    return this.DispatchService.createDustomer(createDispatchDto);
  }

  @Get(':GET /dispatch-locations/:city')
  async getDispatchBycity(@Param('city') city: string): Promise<dispatch> {
    return this.DispatchService.getDispatchBycity(city);
  }

 
}
