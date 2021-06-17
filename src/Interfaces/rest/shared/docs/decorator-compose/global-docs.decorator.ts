import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Error400 } from '../error-docs/error-400.doc';
import { Error401 } from '../error-docs/error-401.doc';
import { Error403 } from '../error-docs/error-403.doc';
import { Error404 } from '../error-docs/error-404.doc';
import { Error500 } from '../error-docs/error-500.doc';
import { DocsOptions } from './interface/docs-options.interface';

// API GLOBAL DOCS COMPOSE DECORATOR FOR SWAGGER UI
export function GlobalDocs(options?:DocsOptions) {
  return applyDecorators(
    ApiOperation(
      { summary: options && options.summary ? options.summary : '' }
    ),
    ApiResponse({
      status: 400,
      description: 'Bad Request',
      type: Error400,
    }),
    ApiResponse({
      status: 401,
      description: 'Unauthorized',
      type: Error401,
    }),
    ApiResponse({
      status: 403,
      description: 'Forbidden',
      type: Error403,
    }),
    ApiResponse({
      status: 404,
      description: 'Not Found',
      type: Error404,
    }),
    ApiResponse({
      status: 500,
      description: 'General Error',
      type: Error500,
    })
  );
}
