import { Module } from '@nestjs/common';
import { LangchainModule } from './langchain/langchain.module';

@Module({
  imports: [LangchainModule],
})
export class AppModule {}
