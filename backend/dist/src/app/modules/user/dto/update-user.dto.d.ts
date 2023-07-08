import { Role } from '@prisma/client';
export interface UpdateUserDto {
    name?: string;
    role?: Role;
}
