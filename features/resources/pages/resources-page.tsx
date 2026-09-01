'use client';

import React from 'react';
import { ResourcesHero, Reports } from '../components';

export const ResourcesPage = () => {
  return (
    <div className="flex flex-col w-full bg-[var(--color-canvas-tint)] min-h-screen">
      <ResourcesHero />
      <Reports />
    </div>
  );
};

export default ResourcesPage;
