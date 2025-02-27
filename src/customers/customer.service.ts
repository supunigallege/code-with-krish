// customer.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './create-customer.dto';
import { GetCustomerByIdDto } from './get-customer-by-id.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) 
    private customerRepository: Repository<Customer>,
  ) {}

  
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    customer.name = createCustomerDto.name;
    customer.email = createCustomerDto.email;
    customer.address = createCustomerDto.address;
    return this.customerRepository.save(customer);
  }

  async findOneById(id: number): Promise<Customer> {
    return this.customerRepository.findOne(id); 
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find(); 
  }
}
}

