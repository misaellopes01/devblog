"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPostMapper = void 0;
class PrismaPostMapper {
    constructor(config) {
        this.config = config;
    }
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
    static postsToDomain(raw) {
        return {
            id: raw.id,
            title: raw.title,
            content: raw.content,
            cover_url: `${process.env.BASE_URL}/post/cover/${raw.cover_url}`,
            createdAt: raw.createdAt,
            updatedAt: raw.uppdatedAt,
            author: {
                name: raw.author.name,
            },
            _count: {
                Comment: raw._count.Comment,
            },
        };
    }
    static postToDomain(raw) {
        var _a, _b;
        return {
            id: raw.id,
            title: raw.title,
            content: raw.content,
            cover_url: `${process.env.BASE_URL}/post/cover/${raw.cover_url}`,
            createdAt: raw.createdAt,
            updatedAt: raw.uppdatedAt,
            author: {
                name: raw.author.name,
            },
            Comment: (_b = (_a = raw.Comment) === null || _a === void 0 ? void 0 : _a.map((comment) => {
                return {
                    id: String(comment.id),
                    content: String(comment.content),
                    createdAt: new Date(comment.createdAt),
                    author: {
                        name: String(comment.author.name),
                    },
                };
            })) !== null && _b !== void 0 ? _b : [],
        };
    }
}
exports.PrismaPostMapper = PrismaPostMapper;
//# sourceMappingURL=prisma-post.js.map