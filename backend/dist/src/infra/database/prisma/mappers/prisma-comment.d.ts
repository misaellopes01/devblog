import { Comment } from 'src/app/modules/comment/entities/comment.entity';
import { CreatedCommentProps } from 'src/app/modules/comment/repositories/comment.repository';
export declare class PrismaCommentMapper {
    static toPrisma(comment: Comment): {
        id: string;
        content: string;
        authorId: string;
        postId: string;
        updatedAt: Date;
        createdAt: Date;
    };
    static toDomain(raw: CreatedCommentProps): CreatedCommentProps;
}
