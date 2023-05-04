import { Injectable } from '@nestjs/common';
import { User } from 'src/app/modules/user/entities/user.entity';
import { UserRepository } from 'src/app/modules/user/repositories/user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
