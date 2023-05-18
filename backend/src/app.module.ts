import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { PostModule } from './app/modules/post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    DatabaseModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
