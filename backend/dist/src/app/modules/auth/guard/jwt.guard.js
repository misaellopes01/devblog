"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuardRefresh = exports.JwtGuard = void 0;
const passport_1 = require("@nestjs/passport");
class JwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super();
    }
}
exports.JwtGuard = JwtGuard;
class JwtGuardRefresh extends (0, passport_1.AuthGuard)('jwt-refresh') {
    constructor() {
        super();
    }
}
exports.JwtGuardRefresh = JwtGuardRefresh;
//# sourceMappingURL=jwt.guard.js.map