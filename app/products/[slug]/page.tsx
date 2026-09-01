import React from 'react';
import { notFound } from 'next/navigation';
import { ProductDetailPage, getProductBySlug, PRODUCTS_DATA } from '@/features/products';

type PageProps = {
    params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
    return PRODUCTS_DATA.map((product) => ({
        slug: product.slug,
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
    const product = getProductBySlug(slug);
    if (!product) return {};
    return {
        title: `${product.title} | PCE Nigeria Products`,
        description: product.description,
    };
}

export default async function Page({ params }: PageProps) {
    const slug = await resolveSlug(params);
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return <ProductDetailPage product={product} />;
}
