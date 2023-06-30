"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    constructor(props) {
        var _a;
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this.props.id;
    }
    get content() {
        return this.props.content;
    }
    set content(content) {
        this.props.content = content;
    }
    get postId() {
        return this.props.postId;
    }
    set postId(postId) {
        this.props.postId = postId;
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
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map