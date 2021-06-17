import * as errors from '@nestjs/common';

export class ErrorHandler extends Error {
  constructor(error) {
    super(error);
    // this.name = "Custom Validation Error";

    switch (error.status) {
      case 400:
        throw new errors.BadRequestException(error.message);

      case 401:
        throw new errors.UnauthorizedException(error.message);

      case 403:
        throw new errors.ForbiddenException(error.message);

      case 404:
        throw new errors.NotFoundException(error.message);

      case 405:
        throw new errors.MethodNotAllowedException(error.message);

      case 406:
        throw new errors.NotAcceptableException(error.message);

      case 408:
        throw new errors.RequestTimeoutException(error.message);

      case 409:
        throw new errors.ConflictException(error.message);

      case 410:
        throw new errors.GoneException(error.message);

      case 412:
        throw new errors.PreconditionFailedException(error.message);

      case 413:
        throw new errors.PayloadTooLargeException(error.message);

      case 415:
        throw new errors.UnsupportedMediaTypeException(error.message);

      case 500:
        throw new errors.InternalServerErrorException(error.message);

      case 501:
        throw new errors.NotImplementedException(error.message);

      case 502:
        throw new errors.BadGatewayException(error.message);

      case 503:
        throw new errors.ServiceUnavailableException(error.message);

      case 504:
        throw new errors.GatewayTimeoutException(error.message);

      case 505:
        throw new errors.HttpVersionNotSupportedException(error.message);

      default:
        throw new errors.InternalServerErrorException('Something Wrong Please Try Again');
    }
  }
}