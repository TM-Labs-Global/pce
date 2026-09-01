'use client';

import React from 'react';
import {
    ProductsHero,
    ProductsAbout,
    StratumGuide,
    ProductCardsGrid,
    PerformanceMatrix,
    HddCaseStudies,
    StockLogistics,
    ProductsCta,
} from '../components';

export const ProductsPage: React.FC = () => {
    return (
        <div className="flex flex-col w-full bg-[#d8e7f1] min-h-screen">
            <ProductsHero />
            <ProductsAbout />
            <StratumGuide />
            <ProductCardsGrid />
            <PerformanceMatrix />
            <HddCaseStudies />
            <StockLogistics />
            <ProductsCta />
        </div>
    );
};

export default ProductsPage;
