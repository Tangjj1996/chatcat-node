import { Controller, Get } from '@nestjs/common';
import { LangchainService } from './langchain.service';

@Controller()
export class LangchainController {
  constructor(private readonly appService: LangchainService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
