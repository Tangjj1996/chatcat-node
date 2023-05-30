import { Module } from '@nestjs/common';
import { LangchainController } from './langchain.controller';
import { LangchainService } from './langchain.service';

@Module({
  imports: [],
  controllers: [LangchainController],
  providers: [LangchainService],
})
export class LangchainModule {}
