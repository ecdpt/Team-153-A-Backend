import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  let port = process.env.PORT;
  if (port == null || port == "") {
      port = '3000';
  }
  await app.listen(port);
}
bootstrap();
