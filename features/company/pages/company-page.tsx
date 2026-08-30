import React from 'react';
import { CompanyHero, WhoWeAre, OverviewCapabilities, OurDirection, Experience, PeopleScale, Standards } from '../components';

export const CompanyPage = () => {
    return (
        <div className="flex flex-col w-full">
            <CompanyHero />
            <WhoWeAre />
            <OverviewCapabilities />
            <OurDirection />
            <Experience />
            <PeopleScale />
            <Standards />
        </div>
    );
};
