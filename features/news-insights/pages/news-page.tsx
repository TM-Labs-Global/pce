'use client';

import React from 'react';
import { NewsHero, NewsCards } from '../components';

export const NewsPage = () => {
  return (
    <div className="flex flex-col w-full bg-[var(--color-canvas-tint)] min-h-screen">
      <NewsHero />
      <NewsCards />
    </div>
  );
};

export default NewsPage;
