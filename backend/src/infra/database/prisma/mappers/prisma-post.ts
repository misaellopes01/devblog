import { ConfigService } from '@nestjs/config';
import {
  PostToDomainDTO,
  PostsToDomainDTO,
} from 'src/app/modules/post/dto/get-posts.dto';
import { Post } from 'src/app/modules/post/entities/post.entity';
import { CreatedPostProps } from 'src/app/modules/post/repositories/post.repository';
type ModifiedCreatedPostProps = Omit<CreatedPostProps, 'updatedAt'> & {
  uppdatedAt: Date;
};

export class PrismaPostMapper {
  constructor(private config: ConfigService) {}

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

  static postsToDomain(raw: any): PostsToDomainDTO {
    return {
      id: raw.id,
      title: raw.title,
      content: raw.content,
      cover_url: `${process.env.BASE_URL}/post/cover/${raw.cover_url}`,
      createdAt: raw.createdAt,
      updatedAt: raw.uppdatedAt,
      author: {
        name: raw.author.name,
      },
      _count: {
        Comment: raw._count.Comment,
      },
    };
  }

  static postToDomain(raw: any): PostToDomainDTO {
    return {
      id: raw.id,
      title: raw.title,
      content: raw.content,
      cover_url: `${process.env.BASE_URL}/post/cover/${raw.cover_url}`,
      createdAt: raw.createdAt,
      updatedAt: raw.uppdatedAt,
      author: {
        name: raw.author.name,
      },
      Comment:
        raw.Comment?.map((comment) => {
          return {
            id: String(comment.id),
            content: String(comment.content),
            createdAt: new Date(comment.createdAt),
            author: {
              name: String(comment.author.name),
            },
          };
        }) ?? [],
    };
  }
}
