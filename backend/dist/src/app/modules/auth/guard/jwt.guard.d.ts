declare const JwtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtGuard extends JwtGuard_base {
    constructor();
}
declare const JwtGuardRefresh_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtGuardRefresh extends JwtGuardRefresh_base {
    constructor();
}
export {};
