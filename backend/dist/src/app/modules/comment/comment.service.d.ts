import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './repositories/comment.repository';
export declare class CommentService {
    private commentsRepository;
    constructor(commentsRepository: CommentRepository);
    create(createCommentDto: CreateCommentDto): Promise<void>;
    findOne(id: string): Promise<import("./dto/get-comment.dto").CommentPropsDTO>;
    update({ commentId, content }: UpdateCommentDto): Promise<void>;
    remove(id: string): Promise<void>;
}
