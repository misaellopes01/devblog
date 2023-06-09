import { Post as RawPost } from '@prisma/client';
import { raw } from 'express';
import { Post } from 'src/app/modules/post/entities/post.entity';
import { CreatedPostProps } from 'src/app/modules/post/repositories/post.repository';
type ModifiedCreatedPostProps = Omit<CreatedPostProps, 'updatedAt'> & {
  uppdatedAt: Date;
};

export class PrismaPostMapper {
  static toPrisma(post: Post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      authorId: post.authorId,
      uppdatedAt: post.updatedAt,
      createdAt: post.createdAt,
    };
  }

  static toDomain(raw: ModifiedCreatedPostProps): CreatedPostProps {
    return {
      id: raw.id,
      title: raw.title,
      content: raw.content,
      createdAt: raw.createdAt,
      updatedAt: raw.uppdatedAt,
      author: {
        email: raw.author.email,
        name: raw.author.name,
      },
    };
  }
}
