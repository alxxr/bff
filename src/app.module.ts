import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './interfaces/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { MessageController } from './interfaces/controllers/message/message.controller';

@Module({
  imports: [
    HttpModule 
  ],
  controllers: [
    AppController
    , MessageController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
