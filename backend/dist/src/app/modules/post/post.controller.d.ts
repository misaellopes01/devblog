import { PostService } from './post.service';
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
    update(id: string, { authorId, title, content }: {
        authorId: any;
        title: any;
        content: any;
    }): Promise<void>;
    remove(id: string): string;
}
