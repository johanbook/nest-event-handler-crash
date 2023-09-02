import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from "@nestjs/swagger";

export function createOpenApiDocument(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder().build();

  return SwaggerModule.createDocument(app, config, {
    operationIdFactory: (_, methodKey) => methodKey,
  });
}
