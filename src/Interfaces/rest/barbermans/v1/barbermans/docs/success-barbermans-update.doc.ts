import { ApiProperty } from '@nestjs/swagger';
import { Meta } from 'src/interfaces/rest/shared/docs/meta.doc';
import { BarbermansResponseData } from './barbermans-response-data.doc';

export class SuccessBarbermansUpdateDoc {
  @ApiProperty({
    description: 'Wrapper Message',
    type: () => BarbermansResponseData,
  })
  data: BarbermansResponseData;

  @ApiProperty({
    description: 'Meta Data',
    type: () => Meta,
  })
  meta: Meta;
}