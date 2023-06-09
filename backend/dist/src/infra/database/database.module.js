"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const user_repository_1 = require("../../app/modules/user/repositories/user.repository");
const prisma_users_repository_1 = require("./prisma/repositories/prisma-users.repository");
const post_repository_1 = require("../../app/modules/post/repositories/post.repository");
const prisma_posts_repository_1 = require("./prisma/repositories/prisma-posts.repository");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: user_repository_1.UserRepository,
                useClass: prisma_users_repository_1.PrismaUserRepository,
            },
            {
                provide: post_repository_1.PostRepository,
                useClass: prisma_posts_repository_1.PrismaPostRepository,
            },
        ],
        exports: [user_repository_1.UserRepository, post_repository_1.PostRepository],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map