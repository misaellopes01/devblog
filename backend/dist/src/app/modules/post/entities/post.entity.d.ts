import { Replace } from 'src/helpers/Replace';
export interface PostProps {
    id?: string;
    title: string;
    content: string;
    authorId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class Post {
    private props;
    constructor(props: Replace<PostProps, {
        createdAt?: Date;
    }>);
    get id(): string;
    get title(): string;
    set title(title: string);
    get content(): string;
    set content(content: string);
    get authorId(): string;
    set authorId(authorId: string);
    get createdAt(): Date;
    set createdAt(createdAt: Date);
    get updatedAt(): Date;
}
