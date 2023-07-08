import { Comment } from 'src/app/modules/comment/entities/comment.entity';
import { CreatedCommentProps } from 'src/app/modules/comment/repositories/comment.repository';

export class PrismaCommentMapper {
  static toPrisma(comment: Comment) {
    return {
      id: comment.id,
      content: comment.content,
      authorId: comment.authorId,
      postId: comment.postId,
      updatedAt: comment.updatedAt,
      createdAt: comment.createdAt,
    };
  }

  static toDomain(raw: CreatedCommentProps): CreatedCommentProps {
    return {
      id: raw.id,
      content: raw.content,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      author: {
        email: raw.author.email,
        name: raw.author.name,
      },
    };
  }
}
