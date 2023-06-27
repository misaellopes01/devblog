import { Post } from '../entities/post.entity';
export interface CreatedPostProps {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    author: {
        email: string;
        name: string;
    };
}
export interface AllPostsProps {
    id: true;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    author: {
        email: string;
        name: string;
    };
    Comment: {
        content: string;
        author: {
            email: string;
            name: string;
        };
    }[];
}
export declare abstract class PostRepository {
    abstract create(post: Post): Promise<CreatedPostProps>;
    abstract showPosts(): Promise<any[]>;
    abstract showPost(postId: string): Promise<any>;
    abstract updatePost(postId: string, authorId: string, title?: string, content?: string): Promise<void>;
    abstract deletePost(postId: string): Promise<void>;
}
