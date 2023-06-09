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
exports.PrismaCommentRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const prisma_comment_1 = require("../mappers/prisma-comment");
let PrismaCommentRepository = class PrismaCommentRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(comment) {
        const persistenceComment = prisma_comment_1.PrismaCommentMapper.toPrisma(comment);
        await this.prisma.comment.create({ data: persistenceComment });
    }
    async showComment(commentId) {
        return await this.prisma.comment.findUnique({
            where: { id: commentId },
            select: {
                id: true,
                content: true,
                createdAt: true,
                author: {
                    select: {
                        email: true,
                    },
                },
                post: {
                    select: {
                        title: true,
                    },
                },
            },
        });
    }
    async updateComment(commentId, content) {
        await this.prisma.comment.update({
            where: { id: commentId },
            data: {
                content,
            },
        });
    }
    async deleteComment(commentId) {
        await this.prisma.comment.delete({
            where: { id: commentId },
        });
    }
};
PrismaCommentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaCommentRepository);
exports.PrismaCommentRepository = PrismaCommentRepository;
//# sourceMappingURL=prisma-comment.repository.js.map