import { PrismaService } from '../prisma.service';
import { CommentRepository } from 'src/app/modules/comment/repositories/comment.repository';
import { Comment } from 'src/app/modules/comment/entities/comment.entity';
import { CommentPropsDTO } from 'src/app/modules/comment/dto/get-comment.dto';
export declare class PrismaCommentRepository implements CommentRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(comment: Comment): Promise<void>;
    showComment(commentId: string): Promise<CommentPropsDTO>;
    updateComment(commentId: string, content: string): Promise<void>;
    deleteComment(commentId: string): Promise<void>;
}
