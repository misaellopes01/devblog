import { User } from '../entities/user.entity';
export declare abstract class UserRepository {
    abstract create(user: User): Promise<User>;
}