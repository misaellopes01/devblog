import { AuthService } from './auth.service';
import { AuthLoginDTO, Tokens } from './dto';
import { UserDTO } from '../user/dto/profile-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signin(data: AuthLoginDTO): Promise<Tokens>;
    logout(user: UserDTO): Promise<void>;
    refreshToken({ payload, refreshToken }: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
