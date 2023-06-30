import { Replace } from 'src/helpers/Replace';

export interface CommentProps {
  id?: string;
  content: string;
  authorId: string;
  postId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Comment {
  private props: CommentProps;

  constructor(props: Replace<CommentProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get content(): string {
    return this.props.content;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get postId(): string {
    return this.props.postId;
  }

  public set postId(postId: string) {
    this.props.postId = postId;
  }

  public get authorId(): string {
    return this.props.authorId;
  }

  public set authorId(authorId: string) {
    this.props.authorId = authorId;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
