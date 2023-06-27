import { Injectable } from '@nestjs/common';
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
    return await this.postsRepository.showPosts();
  }

  async findOne(id: string) {
    return await this.postsRepository.showPost(id);
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

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
