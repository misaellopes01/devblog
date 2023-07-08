"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCommentMapper = void 0;
class PrismaCommentMapper {
    static toPrisma(comment) {
        return {
            id: comment.id,
            content: comment.content,
            authorId: comment.authorId,
            postId: comment.postId,
            updatedAt: comment.updatedAt,
            createdAt: comment.createdAt,
        };
    }
    static toDomain(raw) {
        return {
            id: raw.id,
            content: raw.content,
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt,
            author: {
                email: raw.author.email,
                name: raw.author.name,
            },
        };
    }
}
exports.PrismaCommentMapper = PrismaCommentMapper;
//# sourceMappingURL=prisma-comment.js.map