export interface ProjectSection {
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

export interface ProjectDetail {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    tagline?: string;
    date?: string;
    location?: string;
    category?: string;
    heroImage?: string;
    intro?: string;
    sections?: ProjectSection[];
    bentoImages?: string[];
    specs?: {
        label: string;
        value: string;
    }[];
}
