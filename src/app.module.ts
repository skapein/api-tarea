import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'; 
import { UsersModule } from './users/users.module';
import { AutoresModule } from './autores/autores.module';
import { LibrosModule } from './libros/libros.module';
import { MongooseModule }  from '@nestjs/mongoose'; 
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.urimongo),
    UsersModule,
    AutoresModule,
    LibrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
