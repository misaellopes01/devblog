import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        hashedRt: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
    }, unknown, never> & {}>;
}
export {};
