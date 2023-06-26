import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract showUsers(): Promise<User[]>;
  abstract findOne(id: string): Promise<User>;
}
