import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Transaction } from 'sequelize';
import { MEDEA_DB } from 'src/infrastructure/constants/general.constant';
import { ErrorHandler } from 'src/infrastructure/middleware/error-handler';

@Injectable()
export class MedeaTransactionInterceptor implements NestInterceptor {
  constructor(
    @Inject(MEDEA_DB) private readonly sequelize
  ) { }

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {
    const httpContext = context.switchToHttp();
    const req = httpContext.getRequest();

    const transaction: Transaction = await this.sequelize.transaction();
    req.transaction = transaction;
    return next.handle().pipe(
      tap(() => {
        transaction.commit();
      }),
      catchError((err) => {
        transaction.rollback();
        throw new ErrorHandler(err);
      })
    );
  }
}
