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
exports.PrismaPostRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_post_1 = require("../mappers/prisma-post");
let PrismaPostRepository = class PrismaPostRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(post) {
        const postToPrisma = prisma_post_1.PrismaPostMapper.toPrisma(post);
        const postCreated = await this.prisma.post.create({
            data: postToPrisma,
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                uppdatedAt: true,
                author: {
                    select: {
                        email: true,
                        name: true,
                    },
                },
            },
        });
        return prisma_post_1.PrismaPostMapper.toDomain(postCreated);
    }
    async showPosts() {
        const postCreated = await this.prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                uppdatedAt: true,
                author: {
                    select: {
                        email: true,
                        name: true,
                    },
                },
                Comment: {
                    select: {
                        content: true,
                        author: {
                            select: {
                                email: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        return postCreated;
    }
    showPost() {
        throw new Error('Method not implemented.');
    }
    updatePost(postId, title, content) {
        throw new Error('Method not implemented.');
    }
    deletePost(postId) {
        throw new Error('Method not implemented.');
    }
};
PrismaPostRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaPostRepository);
exports.PrismaPostRepository = PrismaPostRepository;
//# sourceMappingURL=prisma-posts.repository.js.map