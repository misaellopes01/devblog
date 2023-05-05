import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: UserRepository);
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
