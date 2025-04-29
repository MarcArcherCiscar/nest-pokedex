import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
import { EntrenadoresModule } from './entrenadores/entrenadores.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB || 'mongodb://localhost:27017/nest-pokemon', {
      dbName: 'pokemonsdb'
    }),
    CommonModule,
    PokemonModule,
    SeedModule,
    EntrenadoresModule
  ], 
})

export class AppModule {
  constructor() {
    //console.log(process.env)
  }
}
