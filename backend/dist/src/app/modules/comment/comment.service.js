"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const comment_repository_1 = require("./repositories/comment.repository");
const comment_entity_1 = require("./entities/comment.entity");
let CommentService = class CommentService {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async create(createCommentDto) {
        const newComment = new comment_entity_1.Comment(createCommentDto);
        return await this.commentsRepository.create(newComment);
    }
    async findOne(id) {
        return await this.commentsRepository.showComment(id);
    }
    async update({ commentId, content }) {
        return await this.commentsRepository.updateComment(commentId, content);
    }
    async remove(id) {
        return await this.commentsRepository.deleteComment(id);
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map