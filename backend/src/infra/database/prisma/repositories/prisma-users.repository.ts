import { Injectable } from '@nestjs/common';
import { User } from 'src/app/modules/user/entities/user.entity';
import { UserRepository } from 'src/app/modules/user/repositories/user.repository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/prisma-user';
import { UpdateUserDto } from 'src/app/modules/user/dto/update-user.dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return PrismaUserMapper.toDomain(user);
  }

  async create(user: User): Promise<User> {
    const savedUser = await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
        role: user.role,
      },
    });

    return PrismaUserMapper.toDomain(savedUser);
  }

  async showUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map(PrismaUserMapper.toDomain);
  }

  async deleteAccount(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  async updateUserInfo(
    userId: string,
    { name, role }: UpdateUserDto,
  ): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        role: role,
      },
    });
  }
  // To Implement later
  async updateAvatar(avatarUrl: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
