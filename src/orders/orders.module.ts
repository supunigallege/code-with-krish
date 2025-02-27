import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entity/order.item.entity';
import { Order } from './entity/order.entity';


@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [TypeOrmModule.forFeature([Order,OrderItem])]
})

export class OrdersModule {}
