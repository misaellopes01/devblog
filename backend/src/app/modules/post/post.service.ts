import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/post.repository';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(private postsRepository: PostRepository) {}

  async create(createPostDto: CreatePostDto) {
    const newPost = new Post(createPostDto);
    const createdPost = await this.postsRepository.create(newPost);
    return createdPost;
  }

  async findAll() {
    const allPosts = await this.postsRepository.showPosts();
    return allPosts;
  }

  async findOne(id: string) {
    const post = await this.postsRepository.showPost(id);
    if (!post) {
      throw new NotFoundException('Post não existente');
    }
    return post;
  }

  async update(id: string, { authorId, content, title }: UpdatePostDto) {
    const postId = id;
    return await this.postsRepository.updatePost(
      postId,
      authorId,
      title,
      content,
    );
  }

  async updateCover(postId: string, cover_url: string) {
    return await this.postsRepository.updateCover(postId, cover_url);
  }

  async remove(id: string) {
    return await this.postsRepository.deletePost(id);
  }
}
