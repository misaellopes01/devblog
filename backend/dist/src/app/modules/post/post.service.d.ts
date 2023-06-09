import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/post.repository';
export declare class PostService {
    private postsRepository;
    constructor(postsRepository: PostRepository);
    create(createPostDto: CreatePostDto): Promise<import("./repositories/post.repository").CreatedPostProps>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
