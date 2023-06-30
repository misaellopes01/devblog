import { Comment } from '../entities/comment.entity';
export interface CreatedCommentProps {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    author: {
        email: string;
        name: string;
    };
}
export declare abstract class CommentRepository {
    abstract create(comment: Comment): Promise<void>;
    abstract showComment(commentId: string): Promise<any>;
    abstract updateComment(commentId: string, content: string): Promise<void>;
    abstract deleteComment(commentId: string): Promise<void>;
}
