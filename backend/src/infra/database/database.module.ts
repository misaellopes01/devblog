import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/app/modules/user/repositories/user.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-users.repository';
import { PostRepository } from 'src/app/modules/post/repositories/post.repository';
import { PrismaPostRepository } from './prisma/repositories/prisma-posts.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: PostRepository,
      useClass: PrismaPostRepository,
    },
  ],
  exports: [UserRepository, PostRepository],
})
export class DatabaseModule {}
