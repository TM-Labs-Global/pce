import { CapabilitiesHero, OurApproach, CoreCapabilities, HowWeWork } from '../components';

export const CapabilitiesPage = () => {
    return (
        <div className="flex flex-col w-full">
            <CapabilitiesHero />
            <OurApproach />
            <CoreCapabilities />
            <HowWeWork />
        </div>
    );
};
