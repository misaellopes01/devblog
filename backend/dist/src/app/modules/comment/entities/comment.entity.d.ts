import { Replace } from 'src/helpers/Replace';
export interface CommentProps {
    id?: string;
    content: string;
    authorId: string;
    postId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare class Comment {
    private props;
    constructor(props: Replace<CommentProps, {
        createdAt?: Date;
    }>);
    get id(): string;
    get content(): string;
    set content(content: string);
    get postId(): string;
    set postId(postId: string);
    get authorId(): string;
    set authorId(authorId: string);
    get createdAt(): Date;
    set createdAt(createdAt: Date);
    get updatedAt(): Date;
}
