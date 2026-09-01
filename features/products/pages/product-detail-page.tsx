'use client';

import React from 'react';
import { ProductItem } from '../types';
import { ProductDetailTemplate } from '../components/product-detail-template';

interface ProductDetailPageProps {
    product: ProductItem;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
    return <ProductDetailTemplate product={product} />;
};

export default ProductDetailPage;
