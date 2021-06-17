import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { BARBERMAN_MODULE_LIST } from 'src/barbermans-module.list';

export async function OutlookCenterAPIDocs(app: INestApplication) {
  const SCOptions = new DocumentBuilder()
    .setTitle("Open Platform Service Outlook Barbershop")
    .setDescription("This API Docs for describe all Open Platform RESTful endpoint")
    .setVersion("V 1.0")
    .setContact("Alphacreativee", "http://alphacreativee.com", "support@alphacreativee.co.id")
    .addServer(process.env.SWAGGER_HOST, "Development API Gateway")
    // .setExternalDoc('This is a External API Docs Embeded From Postman', 'https://www.getpostman.com/collections/f28c8fa3a0fe77a65af1')
    // .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' })
    .build();

  const SCDocument = SwaggerModule.createDocument(app, SCOptions, {
    include: [
      ...BARBERMAN_MODULE_LIST,
    ]
  });

  // generate swagger to json for combine
  writeFileSync('./swagger-spec-account-op.json', JSON.stringify(SCDocument));

  SwaggerModule.setup('api/open-platform/docs', app, SCDocument);
}
