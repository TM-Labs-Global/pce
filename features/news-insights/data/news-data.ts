import { NewsArticleDetail } from '../types/news.types';

export const NEWS_DATA: Record<string, NewsArticleDetail> = {
    "ob3-river-niger-hdd-crossing-completion-report": {
        id: "1",
        slug: "ob3-river-niger-hdd-crossing-completion-report",
        title: "Completion Report: PCE Successfully Installs 2km OB3 River Niger HDD Crossing.",
        category: "News",
        date: "APRIL 28, 2026",
        readTime: "4 min read",
        author: "PCE Engineering Directorate",
        heroImage: "/pictures/case-study/ob3/ob3-bento-1.jpg",
        bentoImages: [
            "/pictures/hero-slider/ob3-construction-team.jpg",
            "/pictures/hero-slider/ob3-02-team.jpg",
            "/pictures/case-study/ob3/ob3-bento-2.jpg",
            "/pictures/case-study/ob3/ob3-bento-3.jpg"
        ],
        intro: "PCE executed the River Niger HDD crossing on the OB3 Gas Pipeline between Ndoni in Rivers State and Aboh in Delta State, successfully completing 2 km of 48-inch pipeline installation.",
        specs: [
            { label: "Pipeline Diameter", value: "48 inches" },
            { label: "Crossing Length", value: "2,000 metres" },
            { label: "Crossing Depth", value: "52 metres" },
            { label: "Completion Date", value: "28th April, 2026" }
        ],
        sections: [
            {
                tagline: "MILESTONE ACHIEVED",
                heading: "Connecting critical national gas infrastructure across the River Niger.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "PCE completed the 2,000-metre, 48-inch HDD crossing between KP15 and KP17, connecting Ndoni in Rivers State to Aboh in Delta State.",
                    "Following previous specialist attempts that remained incomplete, NGIC entrusted PCE with the crossing package. PCE deployed high-capacity HDD rig spreads, dual-rig intersecting pilot hole technology, and self-developed drilling fluids to complete the project."
                ]
            },
            {
                tagline: "EXECUTION HIGHLIGHTS",
                heading: "High-tonnage pullback and dual-rig synchronous reaming.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "Key technical parameters and equipment deployed on the crossing:"
                ],
                bullets: [
                    "GS-12000L HDD rig with 1,000+ tonnes pulling capacity",
                    "GD-5000L HDD rig with 500 tonnes pulling capacity",
                    "Dual-rig intersecting pilot hole guidance across 2,000 metres",
                    "Self-developed drilling-fluid formulation for complex gravel, sand and rock strata"
                ],
                highlightStat: {
                    value: "2,000 m",
                    label: "Completed 48-inch HDD crossing"
                }
            }
        ]
    },
    "latest-progress-52km-pipeline-epc-project": {
        id: "2",
        slug: "latest-progress-52km-pipeline-epc-project",
        title: "Latest Progress: 52km Pipeline EPC Project Operations & Construction.",
        category: "News",
        date: "MAY 2026",
        readTime: "5 min read",
        author: "PCE Project Management Office",
        heroImage: "/pictures/hero-slider/pipeline-epc-cover-photo.JPG",
        bentoImages: [
            "/pictures/company/specialist-pipe-2.jpg",
            "/pictures/company/specialist-pipe.jpg",
            "/pictures/company/pipeline.jpg",
            "/pictures/equipment/main-equipments-cover-photo.jpg"
        ],
        intro: "An operational update on PCE's comprehensive 52km Pipeline EPC project, combining continuous HDD, trenching, welding, NDT, hydrotesting, coating, and pre-commissioning.",
        specs: [
            { label: "Pipeline Length", value: "52 km" },
            { label: "Continuous HDD", value: "30+ km" },
            { label: "Pipeline Diameter", value: "12 in" },
            { label: "Scope", value: "Full EPC Execution" }
        ],
        sections: [
            {
                tagline: "EPC PROGRESS UPDATE",
                heading: "Continuous field execution across 52 kilometres.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "PCE's EPC project team continues to advance construction operations across the 52km pipeline route.",
                    "The scope includes extensive continuous HDD crossings spanning over 30 kilometres, alongside open-cut trenching, automatic welding, non-destructive testing (NDT), field joint coating, hydrostatic testing, and commissioning support."
                ]
            }
        ]
    },
    "akk-river-niger-hdd-crossing-completion-milestone": {
        id: "3",
        slug: "akk-river-niger-hdd-crossing-completion-milestone",
        title: "AKK River Niger Crossing: Specialist HDD Execution Beneath Mixed Strata.",
        category: "Insights",
        date: "JULY 26, 2025",
        readTime: "4 min read",
        author: "PCE HDD Operations",
        heroImage: "/pictures/case-study/akk/akk-bento-1.jpg",
        bentoImages: [
            "/pictures/hero-slider/akk-cover-photo.jpg",
            "/pictures/case-study/akk/akk-bento-2.jpg",
            "/pictures/case-study/akk/akk-bento-3.jpg"
        ],
        intro: "PCE completed the specialist HDD crossing for the 40-inch AKK gas pipeline beneath the River Niger through complex sand, gravel and rock strata.",
        specs: [
            { label: "Pipeline Diameter", value: "40 inches" },
            { label: "Crossing Length", value: "1,565 metres" },
            { label: "Crossing Depth", value: "16 metres" },
            { label: "Completion Date", value: "26th July, 2025" }
        ],
        sections: [
            {
                tagline: "SPECIALIST ENGINEERING",
                heading: "Dual-rig intersecting method for project-critical gas infrastructure.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "The 1.565 km River Niger crossing formed a crucial package on the Ajaokuta–Kaduna–Kano (AKK) Trans Nigeria Gas Pipeline project.",
                    "PCE's technical execution utilized dual-rig intersecting pilot holes and synchronous reaming to navigate complex geology and secure pipeline installation."
                ]
            }
        ]
    },
    "advanced-bpds-pipeline-location-technique": {
        id: "4",
        slug: "advanced-bpds-pipeline-location-technique",
        title: "New Pipeline Location Survey Technique: BPDS 3D Subsurface Mapping.",
        category: "Insights",
        date: "2026",
        readTime: "4 min read",
        author: "PCE Technical Steering Group",
        heroImage: "/pictures/hero-slider/bpds-cover-photo.png",
        bentoImages: [
            "/pictures/hero-slider/bpds-02.png",
            "/pictures/hero-slider/bpds-03.png",
            "/pictures/hero-slider/bpds-06.png"
        ],
        intro: "Three-dimensional location and depth measurement technique for deeply buried steel pipelines beneath river crossings and complex geological environments.",
        specs: [
            { label: "Technology", value: "BPDS 3D Subsurface Mapping" },
            { label: "Application", value: "Deep Steel Pipelines" },
            { label: "Target Strata", value: "Rivers & Marshy Terrain" },
            { label: "Output", value: "3D Coordinates & Burial Depth" }
        ],
        sections: [
            {
                tagline: "SURVEY INNOVATION",
                heading: "Precision location and depth measurement for buried steel pipelines.",
                headingColor: "text-[var(--color-ink-muted-48)]",
                body: [
                    "PCE's BPDS (Buried Pipeline Detection System) technique provides accurate three-dimensional positioning and depth measurement for deeply buried steel pipelines.",
                    "The system operates effectively in difficult river and wetland environments where standard detection methods encounter depth and interference limits."
                ]
            }
        ]
    }
};

export const getNewsBySlug = (slug: string): NewsArticleDetail => {
    return NEWS_DATA[slug] || NEWS_DATA["ob3-river-niger-hdd-crossing-completion-report"];
};
