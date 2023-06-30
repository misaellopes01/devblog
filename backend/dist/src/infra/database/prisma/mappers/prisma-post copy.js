"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPostMapper = void 0;
class PrismaPostMapper {
    static toPrisma(post) {
        return {
            id: post.id,
            title: post.title,
            content: post.content,
            authorId: post.authorId,
            uppdatedAt: post.updatedAt,
            createdAt: post.createdAt,
        };
    }
    static toDomain(raw) {
        return {
            id: raw.id,
            title: raw.title,
            content: raw.content,
            createdAt: raw.createdAt,
            updatedAt: raw.uppdatedAt,
            author: {
                email: raw.author.email,
                name: raw.author.name,
            },
        };
    }
}
exports.PrismaPostMapper = PrismaPostMapper;
//# sourceMappingURL=prisma-post%20copy.js.map