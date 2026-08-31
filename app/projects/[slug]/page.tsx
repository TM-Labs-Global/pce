import React from 'react';
import { ProjectDetailTemplate } from '@/features/projects/components/project-detail-template';
import { getProjectBySlug, PROJECTS_DATA } from '@/features/projects/data/projects-data';

type PageProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
    return Object.keys(PROJECTS_DATA).map((slug) => ({
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
    const project = getProjectBySlug(slug);
    return {
        title: `${project.title} | PCE Nigeria Projects`,
        description: project.intro,
    };
}

export default async function Page({ params }: PageProps) {
    const slug = await resolveSlug(params);
    const project = getProjectBySlug(slug);

    return <ProjectDetailTemplate project={project} />;
}
