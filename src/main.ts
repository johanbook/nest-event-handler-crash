import fastifyMultipart, { MultipartFile } from "@fastify/multipart";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { SwaggerModule } from "@nestjs/swagger";

import { createOpenApiDocument } from "src/swagger";

import { AppModule } from "./app.module";

const PORT = Number.parseInt(process.env.PORT || "3000");

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  const document = createOpenApiDocument(app);
  SwaggerModule.setup(`/docs`, app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  app.register(fastifyMultipart, {
    attachFieldsToBody: "keyValues",
    limits: {
      fileSize: 30 * 1000 * 1000,
      files: 20,
    },
    onFile: async (part: MultipartFile) => {
      (part as any).value = await part.toBuffer();
    },
  });

  await app.listen(PORT, "0.0.0.0");
}

bootstrap();
