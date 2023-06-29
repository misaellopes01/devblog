import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, updatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() { authorId, content, title }) {
    const createPostDto = {
      authorId,
      content,
      title,
    };
    return await this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
  // Get Post Cover
  // @Get('me')
  // async getMe(@GetUser('') user: UserProfileDTO) {
  //   user.avatar_url = `http://localhost:3000/avatar/${user.avatar_url}`;
  //   return user
  // }
  // Upload Post Cover
  // @Patch('avatar/update')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads/avatar',
  //       filename: (req, file, cb) => {
  //         const randomName = Array(32)
  //           .fill(null)
  //           .map(() => Math.round(Math.random() * 16).toString(16))
  //           .join('');
  //         return cb(null, `${randomName}${extname(file.originalname)}`);
  //       },
  //     }),
  //   }),
  // )
  // async uploadFile(@GetUser('') user: User, @UploadedFile() file) {
  //   return await this.userService.updateUserAvatar(user.id, file.filename)
  // }
}
