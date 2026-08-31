import { NewsArticleDetail } from '../types/news.types';

export const NEWS_DATA: Record<string, NewsArticleDetail> = {
    "pce-completes-record-breaking-hdd-crossing": {
        id: "1",
        slug: "pce-completes-record-breaking-hdd-crossing",
        title: "PCE Nigeria Completes Record-Breaking Horizontal Directional Drilling Crossing.",
        category: "News",
        date: "AUGUST 24, 2026",
        readTime: "4 min read",
        author: "PCE Engineering Team",
        heroImage: "/pictures/home-page/horizontal-drilling-new.jpg",
        bentoImages: [
            "/pictures/capabilities/engineer-on-site.jpg",
            "/pictures/capabilities/prepare-equipment.jpg",
            "/pictures/home-page/pipe-handling-capacity.jpg",
            "/pictures/capabilities/survey.jpg",
            "/pictures/capabilities/completed-project.jpg"
        ],
        intro: "Our engineering team successfully executed a 1,200m river channel HDD crossing using advanced mud recycling systems and precision steering guidance.",
        specs: [
            { label: "Crossing Length", value: "1,200 metres" },
            { label: "Pipeline Size", value: "36 in" },
            { label: "Max Depth", value: "32 metres" },
            { label: "Completion", value: "August 2026" }
        ],
        sections: [
            {
                tagline: "PROJECT OVERVIEW",
                heading: "Overcoming challenging deltaic geology and water currents.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "PCE Nigeria has achieved a major milestone with the successful installation of a 36-inch high-pressure steel pipeline beneath a major river channel.",
                    "The crossing encountered complex strata comprising soft alluvial silt, medium-to-coarse sand, and high water-table pressures. Utilizing specialized HDD spreads and continuous drilling-fluid optimization, the team maintained bore integrity throughout pilot drilling, reaming, and pullback."
                ]
            },
            {
                tagline: "TECHNICAL EXECUTION",
                heading: "Advanced steering precision and high-capacity pullback.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "Execution highlights for this record-breaking installation included:"
                ],
                bullets: [
                    "Electromagnetic ParaTrack guidance for sub-metre steering accuracy",
                    "High-efficiency closed-loop mud recycling systems to minimize waste",
                    "500-ton HDD rig spread with automated pipe-handling systems",
                    "Real-time annular pressure monitoring preventing mud loss"
                ],
                highlightStat: {
                    value: "1,200 m",
                    label: "Continuous HDD crossing"
                }
            }
        ]
    },
    "achieving-iso-excellence-across-operations": {
        id: "2",
        slug: "achieving-iso-excellence-across-operations",
        title: "Achieving ISO Technical & Environmental Excellence Across Operations.",
        category: "Insights",
        date: "AUGUST 18, 2026",
        readTime: "5 min read",
        author: "PCE QHSE Directorate",
        heroImage: "/pictures/capabilities/engineer-on-site.jpg",
        bentoImages: [
            "/pictures/safety/protection-two.jpg",
            "/pictures/safety/standards.jpg",
            "/pictures/safety/environmental-care.jpg"
        ],
        intro: "PCE Nigeria reaffirms its commitment to stringent NMDPRA and ISO compliance standards across all onshore and river crossing projects.",
        specs: [
            { label: "Certification", value: "ISO 9001 / 14001 / 45001" },
            { label: "Regulatory Body", value: "NMDPRA Compliance" },
            { label: "Safety Record", value: "Zero LTI" },
            { label: "Scope", value: "National Operations" }
        ],
        sections: [
            {
                tagline: "STANDARDS & RESPONSIBILITY",
                heading: "Embedding safety, quality, and environmental care into every workflow.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "Operational excellence in pipeline engineering requires continuous alignment with global quality and safety benchmarks.",
                    "PCE Nigeria's integrated QHSE management system ensures that every project phase—from initial geotechnical survey through hydrotesting and commissioning—adheres strictly to ISO standards and NMDPRA regulations."
                ]
            },
            {
                tagline: "SUSTAINABLE PERFORMANCE",
                heading: "Protecting ecosystems above and beneath the surface.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "By leveraging trenchless HDD methodologies, PCE reduces surface environmental footprint and avoids disturbance to riverbeds, roadways, and surrounding communities."
                ]
            }
        ]
    },
    "fleet-expansion-high-tonnage-rig-capacity": {
        id: "3",
        slug: "fleet-expansion-high-tonnage-rig-capacity",
        title: "Fleet Expansion: Integrating High-Tonnage Rig Capacity for Deep Crossings.",
        category: "News",
        date: "AUGUST 10, 2026",
        readTime: "3 min read",
        author: "PCE Operations Team",
        heroImage: "/pictures/home-page/pipe-handling-capacity.jpg",
        intro: "An inside look at PCE's heavy equipment fleet expansion, enhancing pullback capabilities for large-diameter pipelines.",
        specs: [
            { label: "Rig Capacity", value: "500-ton & 1,000-ton" },
            { label: "Mud Pumps", value: "Triplex Heavy Duty" },
            { label: "Pipe Rollers", value: "100+ Fleet Units" },
            { label: "Location", value: "Nigeria Operations" }
        ],
        sections: [
            {
                tagline: "EQUIPMENT CAPACITY",
                heading: "High-tonnage power backing critical energy infrastructure.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "To support Nigeria's expanding gas transport network, PCE has reinforced its field-ready equipment fleet with additional high-tonnage HDD rigs, heavy pipe-handling machines, and high-volume mud pumps.",
                    "This capacity expansion ensures PCE remains fully equipped to tackle major 40-inch and 48-inch river crossings across West Africa."
                ]
            }
        ]
    },
    "advanced-bpds-pipeline-location-mapping": {
        id: "4",
        slug: "advanced-bpds-pipeline-location-mapping",
        title: "Advanced BPDS Pipeline Location & Geotechnical Mapping.",
        category: "Insights",
        date: "JULY 28, 2026",
        readTime: "6 min read",
        author: "PCE Geotechnical Department",
        heroImage: "/pictures/capabilities/survey.jpg",
        intro: "How electromagnetic and subsurface radar technologies are reducing risk and accelerating project timelines.",
        specs: [
            { label: "Survey Tech", value: "3D Electromagnetic BPDS" },
            { label: "Detection Depth", value: "Up to 100m+" },
            { label: "Accuracy", value: "Sub-decimetre" },
            { label: "Application", value: "Deep Steel Pipelines" }
        ],
        sections: [
            {
                tagline: "SUB-SURFACE PRECISION",
                heading: "Accurate 3D pipeline mapping in complex environments.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "Buried pipeline location and condition assessment in deep or marshy terrain presents unique technical challenges.",
                    "PCE's BPDS (Buried Pipeline Detection System) technology delivers 3D positional coordinates and depth measurements for deeply buried steel pipelines, eliminating guesswork prior to crossing construction."
                ]
            }
        ]
    }
};

export const getNewsBySlug = (slug: string): NewsArticleDetail => {
    return NEWS_DATA[slug] || NEWS_DATA["pce-completes-record-breaking-hdd-crossing"];
};
