// Modules
import { Module } from '@nestjs/common';
import { V1BarbermansUseCase } from 'src/application/use-cases/barbermans/v1/v1-barbermans.usecase';
// Controller
import { MedeaModule } from 'src/infrastructure/database/postgres/medea-db/medea.module';
import { medeaProviders } from 'src/infrastructure/database/postgres/medea-db/medea.providers';

import { BarbermansServices } from 'src/infrastructure/database/postgres/medea-db/services/barbermans.service';
import { V1BarbermanController } from './v1-barbermans.controller';
// Transformers
import { V1BarbermansTransformer } from './v1-barbermans.transformer';
import moment from 'moment';

@Module({
  imports: [MedeaModule],
  providers: [
    {
      provide: 'MomentWrapper',
      useValue: moment,
    },
    // Services
    BarbermansServices,
    // Use cases
    V1BarbermansUseCase,
    // Providers
    ...medeaProviders,
    // Transformer
    V1BarbermansTransformer,
    // Constraint
    // IsValidValueFieldConstraint,
    // IsValidBase64ListsConstraint,
  ],
  controllers: [V1BarbermanController],
})
export class V1BarbermansModule {}