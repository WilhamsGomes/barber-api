import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
            phone: string;
            cep: string;
        };
    }>;
}
