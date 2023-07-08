import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { updatePostDto } from './dto/create-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtGuard } from '../auth/guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() { authorId, content, title }) {
    const createPostDto = {
      authorId,
      content,
      title,
    };
    return await this.postService.create(createPostDto);
  }

  // @Get('avatar')
  // async getMe(@GetUser('') user: UserProfileDTO) {
  //   user.avatar_url = `http://localhost:3000/avatar/${user.avatar_url}`;
  //   return user
  // }
  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() { authorId, title, content }: updatePostDto,
  ) {
    const updatePostDto = {
      authorId,
      content,
      title,
    };
    return this.postService.update(id, updatePostDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }

  // Upload Post Cover
  @UseGuards(JwtGuard)
  @Patch('uploads/post/cover/:postId')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/post/cover',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@Param('postId') postId: string, @UploadedFile() file) {
    const cover_url: string = file.filename;
    return await this.postService.updateCover(postId, cover_url);
  }
}
