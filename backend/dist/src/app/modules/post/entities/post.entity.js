"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(props) {
        var _a;
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this.props.id;
    }
    get title() {
        return this.props.title;
    }
    set title(title) {
        this.props.title = title;
    }
    get content() {
        return this.props.content;
    }
    set content(content) {
        this.props.content = content;
    }
    get authorId() {
        return this.props.authorId;
    }
    set authorId(authorId) {
        this.props.authorId = authorId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    set createdAt(createdAt) {
        this.props.createdAt = createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
}
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map