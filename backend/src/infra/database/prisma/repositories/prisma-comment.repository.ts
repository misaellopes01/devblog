import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CommentRepository } from 'src/app/modules/comment/repositories/comment.repository';
import { Comment } from 'src/app/modules/comment/entities/comment.entity';
import { PrismaCommentMapper } from '../mappers/prisma-comment';

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  async create(comment: Comment): Promise<void> {
    const persistenceComment = PrismaCommentMapper.toPrisma(comment);
    await this.prisma.comment.create({ data: persistenceComment });
  }

  async showComment(commentId: string): Promise<any> {
    return await this.prisma.comment.findUnique({ where: { id: commentId } });
  }

  async updateComment(commentId: string, content: string): Promise<void> {
    await this.prisma.comment.update({
      where: { id: commentId },
      data: {
        content,
      },
    });
  }

  async deleteComment(commentId: string): Promise<void> {
    await this.prisma.comment.delete({
      where: { id: commentId },
    });
  }
}
