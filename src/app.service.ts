import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const envs = [
      'DATABASE_TYPE',
      'DATABASE_USERNAME',
      'DATABASE_PASSWORD',
      'DATABASE_HOST',
      'DATABASE_PORT',
      'DATABASE_SYNCHRONIZE',
      'DATABASE_DB',
      'DATABASE_SSL',
      'VERIFIED_TOKEN_EXP',
      'JWT_ACCESS_SECRET',
      'JWT_ACCESS_EXP',
      'JWT_REFRESH_SECRET',
      'JWT_REFRESH_EXP',
      'FRONT_END_URL',
      'EMAIL_HOST',
      'EMAIL_PORT',
      'EMAIL_USER',
      'EMAIL_PASSWORD',
      'GOOGLE_CLIENT_ID',
      'GOOGLE_CLIENT_SECRET',
      'GOOGLE_CALLBACK_URL',
      'CLOUDINARY_NAME',
      'CLOUDINARY_API_KEY',
      'CLOUDINARY_API_SECRET',
      'RESERVED_BOOKING_TIME',
    ];

    const result = {};

    for (const key of envs) {
      result[key] = process.env[key] ? true : false;
    }

    return result;
  }
}
