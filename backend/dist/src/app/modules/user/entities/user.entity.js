"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props) {
        var _a;
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this.props.id;
    }
    set name(name) {
        this.props.name = name;
    }
    get name() {
        return this.props.name;
    }
    set email(email) {
        this.props.email = email;
    }
    get email() {
        return this.props.email;
    }
    set password(password) {
        this.props.password = password;
    }
    get password() {
        return this.props.password;
    }
    set role(role) {
        this.props.role = role;
    }
    get role() {
        return this.props.role;
    }
    get createdAt() {
        return this.props.createdAt;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map