import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, { name }: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
}
