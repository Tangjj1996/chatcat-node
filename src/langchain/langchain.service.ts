import { Injectable } from '@nestjs/common';
import { OpenAI } from 'langchain/llms/openai';

@Injectable()
export class LangchainService {
  private llm: OpenAI;

  constructor() {
    this.llm = new OpenAI({ verbose: true });
  }

  async getAnswer(prompt: string) {
    return await this.llm.call(prompt);
  }
}
