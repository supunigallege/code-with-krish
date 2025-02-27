
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './create-inventory.dto';
import { GetProductByIdDto } from './get-product-by-id.dto';
import { ValidateStockBeforeOrderDto } from './validate-stock-before-order.dto';

@Controller('inventory') 
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  createProduct(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }
  
  @Get(':id')
  getProductById(@Param() params: GetProductByIdDto) {
    return this.inventoryService.findOneById(params.id);
  }

  @Get()
  getAllProducts() {
    return this.inventoryService.findAll();
  }

  @Post('validate-stock')
  validateStockBeforeOrder(@Body() validateStockBeforeOrderDto: ValidateStockBeforeOrderDto) {
    return this.inventoryService.validateStockBeforeOrder(validateStockBeforeOrderDto);
  }
}
