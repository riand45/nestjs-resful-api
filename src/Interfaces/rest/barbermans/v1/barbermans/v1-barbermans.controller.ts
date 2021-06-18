import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorHandler } from 'src/infrastructure/middleware/error-handler';
import { V1BarbermansUseCase } from 'src/application/use-cases/barbermans/v1/v1-barbermans.usecase';
import { GlobalDocs } from "../../../shared/docs/decorator-compose/global-docs.decorator";
import { HeaderDocs } from 'src/interfaces/rest/shared/docs/decorator-compose/header-docs.decorator';
import { RequestCreateBarberman } from './interfaces/v1-barbermans.interface';
import { V1CreateBarbermansDto } from "./dto/v1-barbermans-create.dto";
import { V1BarbermansTransformer } from './v1-barbermans.transformer';
import { SuccessBarbermanFindDoc } from './docs/success-barbermans-find.doc';
import { V1FindBarbermansDto } from './dto/v1-barbermas-find.dto';

@ApiTags('Barberman Endpoint List')
// @HeaderDocs()
@Controller('barbermans')
export class V1BarbermanController {
  constructor(
    private barbermansUseCase: V1BarbermansUseCase,
    private barbermansTransformer: V1BarbermansTransformer,
  ) {}

  @GlobalDocs({ summary: '(Create Barberman)' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @Post()
  public async create(
    @Req() req: RequestCreateBarberman,
    @Body() body: V1CreateBarbermansDto
  ): Promise<any> {
    try {
      const result = await this.barbermansUseCase.create(
        body,
        req.transaction,
      );

      return this.barbermansTransformer.transformFindOne(result.data);
    } catch (err) {
      throw new ErrorHandler(err);
    }
  }

  @GlobalDocs({ summary: '(List Barbermans)' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: SuccessBarbermanFindDoc
  })
  @Get()
  public async find(@Query() query: V1FindBarbermansDto): Promise<any> {
    try {
      const result = await this.barbermansUseCase.find(query);
      return this.barbermansTransformer.transformFind(
        result.rows,
        {
          skip: Number(query.skip),
          limit: Number(query.limit),
        },
      )
    } catch (err) {
      throw new ErrorHandler(err);
    }
  }
}