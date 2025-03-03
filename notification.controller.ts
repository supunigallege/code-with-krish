import { Controller, Get, Param } from '@nestjs/common';

@Controller('notifications')
export class NotificationController {
  
  @Get(':orderId')
  sendNotification(@Param('orderId') orderId: string): string {
    console.log(`Notification sent for Order ID: ${orderId}`);
    return `Notification sent for Order ID: ${orderId}`;
  }
}

