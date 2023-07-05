export interface MapPostsToDomainProps {
  id: string;
  title: string;
  content: string;
  cover_url: string | null;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: {
    email: string;
    name: string;
  };
  _count: {
    Comment: number;
  };
}
