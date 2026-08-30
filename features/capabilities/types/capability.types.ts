export interface CapabilityCard {
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
}

export interface CapabilityStep {
    number: string;
    title: string;
    description: string;
}

export interface CapabilityDetail {
    id: string;
    number: string;
    title: string;
    image: string;
    headline: string;
    subtext: string;
    steps: CapabilityStep[];
}
