import { Role } from '../entities/user.entity';
export type UserDTO = {
    id: string;
    name: string;
    email: string;
    role: Role;
    createdAt: Date;
};
