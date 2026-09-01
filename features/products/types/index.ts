export interface ProductSection {
    tagline?: string;
    heading: string;
    headingColor?: string;
    body?: string[];
    bullets?: string[];
    highlightStat?: {
        value: string;
        label: string;
    };
}

export interface ProductItem {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    eyebrow?: string;
    description: string;
    image?: string;
    secondaryImage?: string;
    tdsUrl?: string;
    sdsUrl?: string;
    quickFacts?: string[];
}

export interface ProductDetail extends ProductItem {
    heroImage?: string;
    intro?: string;
    sections?: ProductSection[];
    specs?: {
        label: string;
        value: string;
    }[];
    executiveStandard?: string;
    mainFunctions?: string[];
    features?: string[];
    applications?: {
        title: string;
        desc: string;
        icon: string;
    }[];
    specTables?: {
        title: string;
        headers: string[];
        rows: string[][];
    }[];
    specTestConditions?: string;
    howItsUsed?: {
        application?: string;
        dosage?: string;
        suitability?: string;
        dosageTable?: { use: string; dosage: string }[];
        mixingSteps?: string[];
        precaution?: string;
    };
    supplyDetails?: {
        label: string;
        value: string;
    }[];
    storageInfo?: string;
    sdsSections?: {
        num: number;
        title: string;
        isDefaultOpen?: boolean;
        content: string;
        table?: {
            headers: string[];
            rows: string[][];
        };
    }[];
    safetyAtAGlance?: {
        cautionStrip?: string;
        ghsHazard?: string;
        hazardClass?: string;
        ratingSystemName?: string;
        ratings?: {
            label: string;
            value: string;
            color: string;
            textColor: string;
        }[];
        ppe?: {
            type: string;
            recommendation: string;
        }[];
        physicalChemical?: {
            property: string;
            value: string;
        }[];
    };
    salesContacts?: {
        name: string;
        phone: string;
        email: string;
    }[];
    alsoKnownAs?: string;
    overviewText?: string;
    whatItDoes?: string;
    sdsTitle?: string;
}
