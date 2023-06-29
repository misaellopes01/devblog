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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_repository_1 = require("./repositories/post.repository");
const post_entity_1 = require("./entities/post.entity");
let PostService = class PostService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async create(createPostDto) {
        const newPost = new post_entity_1.Post(createPostDto);
        const createdPost = await this.postsRepository.create(newPost);
        return createdPost;
    }
    async findAll() {
        return await this.postsRepository.showPosts();
    }
    async findOne(id) {
        const post = await this.postsRepository.showPost(id);
        if (!post) {
            throw new common_1.NotFoundException('Post não existente');
        }
        return post;
    }
    async update(id, { authorId, content, title }) {
        const postId = id;
        return await this.postsRepository.updatePost(postId, authorId, title, content);
    }
    async remove(id) {
        return await this.postsRepository.deletePost(id);
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_repository_1.PostRepository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map