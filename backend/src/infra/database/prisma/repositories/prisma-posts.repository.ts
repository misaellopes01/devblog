import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/app/modules/user/repositories/user.repository';
import { PrismaService } from '../prisma.service';
import {
  CreatedPostProps,
  PostRepository,
} from 'src/app/modules/post/repositories/post.repository';
import { Post } from 'src/app/modules/post/entities/post.entity';
import { PrismaPostMapper } from '../mappers/prisma-post';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}
  async create(post: Post): Promise<CreatedPostProps> {
    const postToPrisma = PrismaPostMapper.toPrisma(post);
    const postCreated = await this.prisma.post.create({
      data: postToPrisma,
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        uppdatedAt: true,
        author: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });

    return PrismaPostMapper.toDomain(postCreated);
  }
  async showPosts(): Promise<any[]> {
    const postCreated = await this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        uppdatedAt: true,
        author: {
          select: {
            email: true,
            name: true,
          },
        },
        Comment: {
          select: {
            content: true,
            author: {
              select: {
                email: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return postCreated;
  }
  showPost(): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  updatePost(postId: string, title?: string, content?: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deletePost(postId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
