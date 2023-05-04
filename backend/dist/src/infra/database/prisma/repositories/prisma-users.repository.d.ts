import { User } from 'src/app/modules/user/entities/user.entity';
import { UserRepository } from 'src/app/modules/user/repositories/user.repository';
export declare class PrismaUserRepository implements UserRepository {
    create(user: User): Promise<User>;
}
