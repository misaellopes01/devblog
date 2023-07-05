import { PrismaService } from '../prisma.service';
import { CreatedPostProps, PostRepository } from 'src/app/modules/post/repositories/post.repository';
import { Post } from 'src/app/modules/post/entities/post.entity';
export declare class PrismaPostRepository implements PostRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(post: Post): Promise<CreatedPostProps>;
    showPosts(): Promise<any[]>;
    showPost(postId: string): Promise<any>;
    updatePost(postId: string, authorId: string, title: string, content: string): Promise<void>;
    deletePost(postId: string): Promise<void>;
    updateCover(postId: string, cover_url: string): Promise<void>;
}
