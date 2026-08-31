import React from 'react';
import { NewsDetailTemplate } from '@/features/news-insights/components/news-detail-template';
import { getNewsBySlug, NEWS_DATA } from '@/features/news-insights/data/news-data';

type PageProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
    return Object.keys(NEWS_DATA).map((slug) => ({
        slug,
    }));
}

async function resolveSlug(params: PageProps['params']): Promise<string> {
    if (params && typeof (params as any).then === 'function') {
        const resolved = await params;
        return resolved.slug;
    }
    return (params as { slug: string }).slug;
}

export async function generateMetadata({ params }: PageProps) {
    const slug = await resolveSlug(params);
    const article = getNewsBySlug(slug);
    return {
        title: `${article.title} | PCE Nigeria News & Insights`,
        description: article.intro,
    };
}

export default async function Page({ params }: PageProps) {
    const slug = await resolveSlug(params);
    const article = getNewsBySlug(slug);

    return <NewsDetailTemplate article={article} />;
}
