import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupAdminPanel } from './admin-panel/admin-panel.plugin';
import {ConfigService} from "@nestjs/config";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupAdminPanel(app);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    validateCustomDecorators: true,
    transformOptions: {
      excludeExtraneousValues: true
    }
  }));

  const configService: ConfigService = app.get('ConfigService');
  await app.listen(configService.get<number>('app.port'));

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

