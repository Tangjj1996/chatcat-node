import { Controller, Get, Query } from '@nestjs/common';
import { LangchainService } from './langchain.service';
import { AnswerDTO } from './dto/answer.dto';

@Controller()
export class LangchainController {
  constructor(private readonly appService: LangchainService) {}

  @Get('answer')
  async getAnswer(@Query() answer: AnswerDTO) {
    return await this.appService.getAnswer(answer.keywords);
  }
}
