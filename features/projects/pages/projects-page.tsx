import React from 'react';
import { ProjectsHome, FeaturedProjects, WhatWorks } from '../components';

export const ProjectsPage = () => {
    return (
        <div className="flex flex-col w-full">
            <ProjectsHome />
            <FeaturedProjects />
            <WhatWorks />
        </div>
    );
};
