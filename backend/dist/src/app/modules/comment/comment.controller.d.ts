import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<void>;
    findOne(id: string): Promise<any>;
    update(id: string, { content }: UpdateCommentDto): Promise<void>;
    remove(id: string): Promise<void>;
}
