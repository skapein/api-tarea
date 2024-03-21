import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { AUTORES } from 'src/models/models';
import { AutoresSchema } from './schema/autores.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: AUTORES.name, 
      useFactory: () => AutoresSchema,
    },
  ]),
  ],
  controllers: [AutoresController],
  providers: [AutoresService],
  exports: [AutoresService],
})
export class AutoresModule {}