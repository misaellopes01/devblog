import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("./entities/user.entity").Role;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("./entities/user.entity").Role;
        createdAt: Date;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
