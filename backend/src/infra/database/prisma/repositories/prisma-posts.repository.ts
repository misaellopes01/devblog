import { Injectable } from '@nestjs/common';
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
      include: {
        _count: {
          select: {
            Comment: true,
          },
        },
        author: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });

    return postCreated;
  }

  async showPost(postId: string): Promise<any> {
    return await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        Comment: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async updatePost(
    postId: string,
    authorId: string,
    title: string,
    content: string,
  ): Promise<void> {
    await this.prisma.post.updateMany({
      where: {
        id: postId,
        authorId,
      },
      data: {
        title: title,
        content: content,
      },
    });
  }

  async deletePost(postId: string): Promise<void> {
    await this.prisma.post.delete({ where: { id: postId } });
  }
}
