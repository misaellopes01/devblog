import { Replace } from 'src/helpers/Replace';

export interface PostProps {
  id?: string;
  title: string;
  content: string;
  authorId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Post {
  private props: PostProps;

  constructor(props: Replace<PostProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get title(): string {
    return this.props.title;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get content(): string {
    return this.props.content;
  }

  public set content(content: string) {
    this.props.content = content;
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
