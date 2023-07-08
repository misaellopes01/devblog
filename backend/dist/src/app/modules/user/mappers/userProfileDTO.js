"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileDTO = void 0;
class UserProfileDTO {
    static toDomain(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
        };
    }
}
exports.UserProfileDTO = UserProfileDTO;
//# sourceMappingURL=userProfileDTO.js.map