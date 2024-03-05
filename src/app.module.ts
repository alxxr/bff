import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageController } from './message/message.controller';

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
