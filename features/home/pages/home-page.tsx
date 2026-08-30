import { HomeHero, Overview, FeaturedProject, Capabilities } from "../components";

export function HomePage() {
    return (
        <div className="flex flex-col w-full">
            <HomeHero />
            <Overview />
            <FeaturedProject />
            <Capabilities />
        </div>
    );
}
