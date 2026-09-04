import { ETHero, OurEquipments, Support } from '../components';

export const EquipmentPage = () => {
    return (
        <div className="flex flex-col w-full">
            <ETHero />
            <OurEquipments />
            <Support />
        </div>
    );
};
