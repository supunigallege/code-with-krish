import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { dispatch } from './dispatch/entity/dispatch.entity';
import { CreateDispatchDto } from './dispatch/dto/create-dispatch.dto';
import { dispatch } from './dispatch/entity/dispatch.entity';
import { Kafka, CompressionTypes } from 'kafkajs';
@Injectable()
export class DispatchService {

 private readonly Kafka = new Kafka({brokers: ['3.0.159.213:9092']});

  private readonly producer = this.Kafka.producer();

  private readonly consumer = this.Kafka.consumer({groupId: 'supuni-order-service'});

  private readonly orderServiceUrl = 'http://localhost:3000/orders';
  private readonly dispatchServiceUrl = 'http://localhost:3003/dispatch';
  constructor(
    @InjectRepository(dispatch)
    private readonly customerRepository: Repository<dispatch>,
  ) {}

  async createDispatch(
    createCustomerDto: CreateDispatchDto,
  ): Promise<dispatch> {
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async getDispatchBycity(city: string): Promise<dispatch> {
    const customer = await this.customerRepository.findOne({ where: { city } });
    if (!customer) {
      throw new NotFoundException(`dispatch with city ${city} not found`);
    }
    return customer;
  }