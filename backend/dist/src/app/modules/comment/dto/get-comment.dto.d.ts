export interface CommentPropsDTO {
    id: string;
    content: string;
    createdAt: Date;
    author: {
        email: string;
    };
    post: {
        title: string;
    };
}
