import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  CreatedPostProps,
  PostRepository,
} from 'src/app/modules/post/repositories/post.repository';
import { Post } from 'src/app/modules/post/entities/post.entity';
import { PrismaPostMapper } from '../mappers/prisma-post';
import {
  PostToDomainDTO,
  PostsToDomainDTO,
} from 'src/app/modules/post/dto/get-posts.dto';

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

  async showPosts(): Promise<PostsToDomainDTO[]> {
    const postCreated = await this.prisma.post.findMany({
      include: {
        _count: {
          select: {
            Comment: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return postCreated.map(PrismaPostMapper.postsToDomain);
  }

  async showPost(postId: string): Promise<PostToDomainDTO> {
    const post = await this.prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        Comment: {
          select: {
            id: true,
            content: true,
            createdAt: true,
            author: {
              select: {
                name: true,
              },
            },
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return PrismaPostMapper.postToDomain(post);
    // return post;
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

  async updateCover(postId: string, cover_url: string): Promise<void> {
    await this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        cover_url,
      },
    });
  }
}
