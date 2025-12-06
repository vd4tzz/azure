import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Docker, Azure Container App !!! test the speed of deploy';
  }
}
