import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const bodyLimit = 524288000; // ~500 Mib

  const adapter = new FastifyAdapter({
    bodyLimit: bodyLimit,
  });
  const fastify = adapter.getInstance();

  console.log(fastify.version);

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter,
  );
  await app.listen(3000);
}
bootstrap();
