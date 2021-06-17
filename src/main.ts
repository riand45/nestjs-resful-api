import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { OutlookCenterAPIDocs } from './infrastructure/swagger/api-docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api/v1');

  // load swagger ui per platform for api docs
  await OutlookCenterAPIDocs(app); // {host}/api/seller-center/docs

  await app.listen(3000);
}
bootstrap();
