import { User } from '../entities/user.entity';
export declare class UserProfileDTO {
    static toDomain(user: User): {
        id: string;
        name: string;
        email: string;
        role: import("../entities/user.entity").Role;
        createdAt: Date;
    };
}
