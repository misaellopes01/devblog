"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../../infra/database/prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    hashRefreshToken(refresh_token) {
        return argon.hash(refresh_token);
    }
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const expiresTokenIn = await this.config.get('JWT_EXPIRES_IN');
        const secretToken = await this.config.get('JWT_SECRET');
        const expiresRefreshTokenIn = await this.config.get('JWT_REFRESH_EXPIRES_IN');
        const secretRefreshToken = await this.config.get('JWT_REFRESH_SECRET');
        const [token, refresh_token] = await Promise.all([
            this.jwt.signAsync(payload, {
                expiresIn: expiresTokenIn,
                secret: secretToken,
            }),
            this.jwt.signAsync(payload, {
                expiresIn: expiresRefreshTokenIn,
                secret: secretRefreshToken,
            })
        ]);
        return {
            access_token: token,
            refresh_token
        };
    }
    async updateUserRefreshToken(user_id, refresh_token) {
        const hashedRt = await this.hashRefreshToken(refresh_token);
        await this.prisma.user.update({
            data: {
                hashedRt
            },
            where: {
                id: user_id
            }
        });
    }
    async signin({ email, password }) {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException('Credentials incorrect!');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new common_1.ForbiddenException('Credentials incorrect!');
        }
        const { access_token, refresh_token } = await this.signToken(user.id, user.email);
        await this.updateUserRefreshToken(user.id, refresh_token);
        return {
            access_token,
            refresh_token
        };
    }
    async logout(user_id) {
        await this.prisma.user.updateMany({
            data: {
                hashedRt: null
            },
            where: {
                id: user_id,
                hashedRt: {
                    not: null
                }
            }
        });
    }
    async refreshToken(user_id, rt) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: user_id,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException('Credentials incorrect!');
        }
        if (!user.hashedRt) {
            throw new common_1.ForbiddenException('Credentials incorrect!');
        }
        const rtMatches = await argon.verify(user.hashedRt, rt);
        if (!rtMatches) {
            throw new common_1.ForbiddenException('Access Denied!');
        }
        const { access_token, refresh_token } = await this.signToken(user.id, user.email);
        await this.updateUserRefreshToken(user.id, refresh_token);
        return {
            access_token,
            refresh_token
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map