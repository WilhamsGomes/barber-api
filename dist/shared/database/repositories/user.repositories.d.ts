import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        password: string;
        phone: string;
        cep: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
