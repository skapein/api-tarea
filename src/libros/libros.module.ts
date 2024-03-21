import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { LibrosSchema } from './schema/libros.schema';
import { LIBROS } from 'src/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoresModule } from 'src/autores/autores.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: LIBROS.name,
        useFactory: () => LibrosSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    AutoresModule,
  ],
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}
