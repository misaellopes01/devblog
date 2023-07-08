import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './repositories/comment.repository';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(private commentsRepository: CommentRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = new Comment(createCommentDto);
    return await this.commentsRepository.create(newComment);
  }

  async findOne(id: string) {
    return await this.commentsRepository.showComment(id);
  }

  async update({ commentId, content }: UpdateCommentDto) {
    return await this.commentsRepository.updateComment(commentId, content);
  }

  async remove(id: string) {
    return await this.commentsRepository.deleteComment(id);
  }
}
