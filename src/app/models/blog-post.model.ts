export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  author: BlogAuthor;
}
