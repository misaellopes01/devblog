import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
interface AuthLoginDTO {
    email: string;
    password: string;
}
type Tokens = {
    access_token: string;
    refresh_token: string;
};
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    hashRefreshToken(refresh_token: string): Promise<string>;
    signToken(userId: string, email: string): Promise<Tokens>;
    updateUserRefreshToken(user_id: string, refresh_token: string): Promise<void>;
    signin({ email, password }: AuthLoginDTO): Promise<Tokens>;
    logout(user_id: string): Promise<void>;
    refreshToken(user_id: string, rt: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
export {};
