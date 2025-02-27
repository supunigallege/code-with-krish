import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './create-customer.dto';
import { GetCustomerByIdDto } from './get-customer-by-id.dto'; 
import { GetAllCustomersDto } from './get-all-customers.dto'; 

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post() 
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    // Create a new customer
    return this.customerService.create(createCustomerDto);
  }

  @Get(':id')
  getCustomerById(@Param() params: GetCustomerByIdDto) {
    // Get a customer by ID
    return this.customerService.findOneById(params.id);
  }

  @Get()
  getAllCustomers() {
    return this.customerService.findAll();
  }
}
