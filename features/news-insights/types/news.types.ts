export interface NewsSection {
    tagline?: string;
    heading: string;
    headingColor?: string;
    body?: string[];
    bullets?: string[];
    highlightStat?: {
        value: string;
        label: string;
    };
}

export interface NewsArticleDetail {
    id: string;
    slug: string;
    title: string;
    category: 'News' | 'Insights';
    date: string;
    readTime?: string;
    author?: string;
    heroImage?: string;
    intro?: string;
    sections?: NewsSection[];
    bentoImages?: string[];
    specs?: {
        label: string;
        value: string;
    }[];
}
