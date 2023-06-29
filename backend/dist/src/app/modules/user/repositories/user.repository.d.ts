import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
export declare abstract class UserRepository {
    abstract create(user: User): Promise<User>;
    abstract showUsers(): Promise<User[]>;
    abstract findOne(id: string): Promise<User>;
    abstract deleteAccount(id: string): Promise<void>;
    abstract updateUserInfo(userId: string, { name, role }: UpdateUserDto): Promise<void>;
    abstract updateAvatar(avatarUrl: string): Promise<void>;
}
