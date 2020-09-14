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
/*
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_DATABASE=my_database
PORT=3000
MODE=DEV
RUN_MIGRATIONS=true
*/