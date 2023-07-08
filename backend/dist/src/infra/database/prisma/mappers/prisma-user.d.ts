import { User as RawUser } from '@prisma/client';
import { User } from 'src/app/modules/user/entities/user.entity';
export declare class PrismaUserMapper {
    static toPrisma(user: User): {
        id: string;
        name: string;
        email: string;
        role: import("src/app/modules/user/entities/user.entity").Role;
        password: string;
        createdAt: Date;
    };
    static toDomain(raw: RawUser): User;
}
