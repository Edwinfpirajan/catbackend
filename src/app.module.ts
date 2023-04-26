import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://mongo:uAFuR1mJGiy6Wfgc5pOs@containers-us-west-114.railway.app:7013"),
    CatModule, 
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
