import { Controller, Get, Query } from '@nestjs/common';
import { LangchainService } from './langchain.service';
import { Answer } from './dto/answer.dto';

@Controller()
export class LangchainController {
  constructor(private readonly appService: LangchainService) {}

  @Get('answer')
  async getAnswer(@Query() answer: Answer) {
    return await this.appService.getAnswer(answer.keywords);
  }
}
