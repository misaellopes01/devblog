export interface PostsToDomainDTO {
  id: string;
  title: string;
  content: string;
  cover_url: string | null;
  createdAt: Date;
  updatedAt: Date;
  author: {
    name: string;
  };
  _count: {
    Comment: number;
  };
}

export interface PostToDomainDTO {
  id: string;
  title: string;
  content: string;
  cover_url: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    name: string;
  };
  Comment: {
    id: string;
    content: string;
    createdAt: Date;
    author: {
      name: string;
    };
  }[];
}
