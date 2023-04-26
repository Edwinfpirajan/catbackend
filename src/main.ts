import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = 8080
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ApiCat Smart Academy ')
    .setDescription('Es una prueba para desarrollador en la academia de Smart por Edwin Fernando Pirajan Arevalo')
    .setVersion('1.0')
    .addTag('Api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(port);
  console.log(`Server is running on port http://localhost:${port}/`)

}
bootstrap();
