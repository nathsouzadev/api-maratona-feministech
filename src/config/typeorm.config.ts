import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions
} from '@nestjs/typeorm';
import { Comunidade } from './entities/Comunidade';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [
        Comunidade
      ],
      migrations: [
        './src/config/migrations/*.js'
      ],
      ssl: {
        rejectUnauthorized: false
      },
      logging: true
    };
  }
};
