import { ETHero, OurEquipments, OurCapabilities, Support } from '../components';

export const EquipmentPage = () => {
    return (
        <div className="flex flex-col w-full">
            <ETHero />
            <OurEquipments />
            <OurCapabilities />
            <Support />
        </div>
    );
};
