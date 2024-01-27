import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env['DATABASE_NAME'], process.env['DATABASE_URI_NO_AUTH']);
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI_NO_AUTH, {
      dbName: process.env.DATABASE_NAME,
      auth: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
      },
    }),

    // feature module
    UserModule,
  ],
})
export class AppModule {}
