import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './app/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { PostModule } from './app/modules/post/post.module';
import { CommentModule } from './app/modules/comment/comment.module';
import { AuthModule } from './app/modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    DatabaseModule,
    PostModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
