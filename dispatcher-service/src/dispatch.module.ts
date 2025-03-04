import { Module } from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { DispatchController } from './dispatch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dispatch } from './entity/dispatch.entity';

@Module({
  providers: [DispatchService],
  controllers: [DispatchController ],
  imports: [TypeOrmModule.forFeature([dispatch])],
})
export class CustomersModule {}