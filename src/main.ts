import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filters';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());

  const opciones = new DocumentBuilder()
    .setTitle('Api-Tarea')
    .setDescription('Documentacion de Api-Tarea')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, opciones);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(3000);
}
bootstrap();