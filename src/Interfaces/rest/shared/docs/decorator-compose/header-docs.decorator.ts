import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
// API DOCS COMPOSE DECORATOR FOR SWAGGER UI
dotenv.config();
export function HeaderDocs() {
  if (process.env.NODE_ENV === 'local') {
    return applyDecorators(
      ApiHeader({
        name: 'x-consumer-custom-id',
        description: 'Barbershop Code',
        required: true
      })
    );
  }
  return applyDecorators(
    ApiHeader({
      name: 'x-api-key',
      description: 'Barbershop API Key',
      required: true
    })
  );
}