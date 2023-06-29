import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserProfileDTO } from './mappers/userProfileDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return UserProfileDTO.toDomain(user);
  }

  @Get('/all')
  async findAll() {
    const users = await this.userService.findAll();
    return users.map(UserProfileDTO.toDomain);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  // features not coded
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  // Get User Profile with avatar
  // @Get('me')
  // async getMe(@GetUser('') user: UserProfileDTO) {
  //   user.avatar_url = `http://localhost:3000/avatar/${user.avatar_url}`;
  //   return user
  // }
  // Upload Avatar
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
