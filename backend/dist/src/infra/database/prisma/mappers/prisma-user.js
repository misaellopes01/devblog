"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMapper = void 0;
const user_entity_1 = require("../../../../app/modules/user/entities/user.entity");
class PrismaUserMapper {
    static toPrisma(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            password: user.password,
            createdAt: user.createdAt,
        };
    }
    static toDomain(raw) {
        return new user_entity_1.User({
            id: raw.id,
            name: raw.name,
            email: raw.email,
            password: raw.password,
            role: raw.role,
            createdAt: raw.createdAt,
        });
    }
}
exports.PrismaUserMapper = PrismaUserMapper;
//# sourceMappingURL=prisma-user.js.map