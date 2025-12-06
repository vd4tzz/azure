import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.d4tzz
      ? 'ton tai bien moi truong'
      : 'khong ton tai bien moi truong';
  }
}
