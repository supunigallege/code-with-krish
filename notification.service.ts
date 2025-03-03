import { Injectable, OnModuleInit } from '@nestjs/common';

import { Kafka } from 'kafkajs'; 
@Injectable()
export class NotificationService implements OnModuleInit {
  private readonly kafka = new Kafka({
    brokers: ['3.0.159.213:9092'], 
  });

  private readonly consumer = this.kafka.consumer({
    groupId: 'supuni-notification-service', 
  });

  
  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'supuni.order.create' }); 

  
    await this.consumer.run({
      eachMessage: async ({ message }) => {
        //const order = JSON.parse(message.value.toString()); 
        //console.log(`Order Created: ${order.customerName} with Order ID ${order.orderId}`);
      },
    });
  }
}
