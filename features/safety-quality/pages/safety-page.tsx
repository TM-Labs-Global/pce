import React from 'react';
import { SafetyHero, Safety, Quality, EnvironmentalCare, OurFuture, Certification } from '../components';

export const SafetyPage = () => {
    return (
        <div className="flex flex-col w-full bg-[var(--color-canvas)]">
            <SafetyHero />
            <Safety />
            <Quality />
            <EnvironmentalCare />
            <OurFuture />
            <Certification />
        </div>
    );
};
