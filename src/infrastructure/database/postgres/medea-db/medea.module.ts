import { Module } from '@nestjs/common';
import { medeaProviders } from './medea.providers';

@Module({
  providers: [...medeaProviders],
  exports: [...medeaProviders] // for accessible on all application that needs it
})
export class MedeaModule { }