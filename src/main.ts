import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// Create a logger instance
const logger = new Logger('Main');

// Create the microservice options object
const microserviceOptions = {
  transport: Transport.NATS,
  options: {
    url: 'nats://localhost:4222',
  }
};

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);

  app.listen(() => {
    logger.log('Microservice is listening...');
  });

}
bootstrap();
