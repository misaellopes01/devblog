import { PostService } from './post.service';
import { updatePostDto } from './dto/create-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create({ authorId, content, title }: {
        authorId: any;
        content: any;
        title: any;
    }): Promise<import("./repositories/post.repository").CreatedPostProps>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, { authorId, title, content }: updatePostDto): Promise<void>;
    remove(id: string): Promise<void>;
    uploadFile(postId: string, file: any): Promise<void>;
}
