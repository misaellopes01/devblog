import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private usersRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 8);
    createUserDto.password = hashedPassword;
    const newUser = new User(createUserDto);
    const createdUser = await this.usersRepository.create(newUser);
    return createdUser;
  }

  async findAll() {
    return await this.usersRepository.showUsers();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOne(id);
  }

  async update(id: string, { name }: UpdateUserDto) {
    return await this.usersRepository.updateUserInfo(id, { name });
  }

  async remove(id: string) {
    return await this.usersRepository.deleteAccount(id);
  }
}
