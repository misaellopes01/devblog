import { ConfigService } from '@nestjs/config';
import { PostToDomainDTO, PostsToDomainDTO } from 'src/app/modules/post/dto/get-posts.dto';
import { Post } from 'src/app/modules/post/entities/post.entity';
import { CreatedPostProps } from 'src/app/modules/post/repositories/post.repository';
type ModifiedCreatedPostProps = Omit<CreatedPostProps, 'updatedAt'> & {
    uppdatedAt: Date;
};
export declare class PrismaPostMapper {
    private config;
    constructor(config: ConfigService);
    static toPrisma(post: Post): {
        id: string;
        title: string;
        content: string;
        authorId: string;
        uppdatedAt: Date;
        createdAt: Date;
    };
    static toDomain(raw: ModifiedCreatedPostProps): CreatedPostProps;
    static postsToDomain(raw: any): PostsToDomainDTO;
    static postToDomain(raw: any): PostToDomainDTO;
}
export {};
