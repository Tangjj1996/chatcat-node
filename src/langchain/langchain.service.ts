import { Injectable } from '@nestjs/common';

@Injectable()
export class LangchainService {
  getHello(): string {
    return 'Hello World!';
  }
}
