import { Post } from '../entities/post.entity';

export abstract class PostRepository {
  abstract create(user: Post): Promise<Post>;
  abstract showPosts(): Promise<Post[]>;
  abstract showPost(): Promise<Post>;
  abstract updatePost(
    postId: string,
    title?: string,
    content?: string,
  ): Promise<void>;
  abstract deletePost(postId: string): Promise<void>;
}
