
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { inventory } from './inventory.entity';
import { CreateInventoryDto } from './create-inventory.dto';
import { GetProductByIdDto } from './get-product-by-id.dto';
import { ValidateStockBeforeOrderDto } from './validate-stock-before-order.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(inventory)
    private inventoryRepository: Repository<inventory>,
  ) {}
  
  async create(createInventoryDto: CreateInventoryDto): Promise<inventory> {
    const product = new inventory();
    product.name = createInventoryDto.name;
    product.price = createInventoryDto.price;
    product.quantity = createInventoryDto.quantity;
    return this.inventoryRepository.save(product); 
  }

  async findOneById(id: number): Promise<inventory> {
    return this.inventoryRepository.findOne(id); 
  }

  async findAll(): Promise<inventory[]> {
    return this.inventoryRepository.find();
  }

  async validateStockBeforeOrder(
    validateStockBeforeOrderDto: ValidateStockBeforeOrderDto,
  ): Promise<boolean> {
    const product = await this.findOneById(validateStockBeforeOrderDto.id);
    if (!product) {
      return false; 
    }
    return product.quantity >= validateStockBeforeOrderDto.quantity; 
  }
}

