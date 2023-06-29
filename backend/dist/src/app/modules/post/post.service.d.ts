import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/post.repository';
export declare class PostService {
    private postsRepository;
    constructor(postsRepository: PostRepository);
    create(createPostDto: CreatePostDto): Promise<import("./repositories/post.repository").CreatedPostProps>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, { authorId, content, title }: UpdatePostDto): Promise<void>;
    remove(id: string): Promise<void>;
}
