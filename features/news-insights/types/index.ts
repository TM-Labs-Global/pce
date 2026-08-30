export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'Press Release' | 'Technical Article' | 'Project Case Study' | 'Industry Insights';
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author?: {
    name: string;
    role: string;
  };
  featured?: boolean;
}
