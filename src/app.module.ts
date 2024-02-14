import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import EnvModule from './commons/modules/env.module';
import ConfigurationService from './commons/services/configuration.service';
import DBModule from './commons/modules/db.module';

@Module({
  imports: [EnvModule, DBModule],
  controllers: [AppController],
  providers: [AppService, ConfigurationService],
})
export class AppModule {}
