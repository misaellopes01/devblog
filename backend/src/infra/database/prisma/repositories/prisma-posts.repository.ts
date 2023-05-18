import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/app/modules/user/repositories/user.repository';
import { PrismaService } from '../prisma.service';
import { PostRepository } from 'src/app/modules/post/repositories/post.repository';
import { Post } from 'src/app/modules/post/entities/post.entity';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}
  create(user: Post): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  showPosts(): Promise<Post[]> {
    throw new Error('Method not implemented.');
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
