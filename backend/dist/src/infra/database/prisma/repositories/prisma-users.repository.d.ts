import { User } from 'src/app/modules/user/entities/user.entity';
import { UserRepository } from 'src/app/modules/user/repositories/user.repository';
import { PrismaService } from '../prisma.service';
export declare class PrismaUserRepository implements UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<User>;
    create(user: User): Promise<User>;
    showUsers(): Promise<User[]>;
}
