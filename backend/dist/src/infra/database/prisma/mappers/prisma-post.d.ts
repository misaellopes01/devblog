import { Post } from 'src/app/modules/post/entities/post.entity';
import { CreatedPostProps } from 'src/app/modules/post/repositories/post.repository';
type ModifiedCreatedPostProps = Omit<CreatedPostProps, 'updatedAt'> & {
    uppdatedAt: Date;
};
export declare class PrismaPostMapper {
    static toPrisma(post: Post): {
        id: string;
        title: string;
        content: string;
        authorId: string;
        uppdatedAt: Date;
        createdAt: Date;
    };
    static toDomain(raw: ModifiedCreatedPostProps): CreatedPostProps;
}
export {};
