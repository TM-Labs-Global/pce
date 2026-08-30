import { CapabilityCard, CapabilityDetail } from '../types/capability.types';

export const CAPABILITIES_CARDS: CapabilityCard[] = [
    {
        id: "hdd",
        number: "01",
        title: "Horizontal Directional Drilling",
        description: "Specialist HDD engineering and construction for river, road, coastal and complex-ground crossings where open-cut construction is impractical or disruptive.",
        image: "/pictures/home-page/horizontal-drilling-new.jpg"
    },
    {
        id: "epc",
        number: "02",
        title: "Pipeline EPC",
        description: "Engineering, procurement and construction for pipeline projects, combining open-cut construction, HDD and bored crossings with welding, NDT, hydrotesting, coating and pre-commissioning.",
        image: "/pictures/home-page/pipeline-drilling.jpg"
    },
    {
        id: "bpds",
        number: "03",
        title: "BPDS Pipeline Location",
        description: "Three-dimensional location and depth measurement for deeply buried steel pipelines, including beneath rivers and in other complex detection environments.",
        image: "/pictures/home-page/pipeline-new.jpg"
    },
    {
        id: "support",
        number: "04",
        title: "Equipment & Technical Support",
        description: "HDD rigs, pumps, recycling systems, drilling tools, specialist materials and technical support for demanding crossing requirements.",
        image: "/pictures/home-page/equipment.jpg"
    }
];

export const CAPABILITIES_DETAILS: Record<string, CapabilityDetail> = {
    hdd: {
        id: "hdd",
        number: "01",
        title: "Horizontal Directional Drilling",
        image: "/pictures/home-page/horizontal-drilling-new.jpg",
        headline: "Go under the obstacle. Keep the project moving.",
        subtext: "HDD provides a trenchless route beneath rivers, roads and other sensitive or difficult crossing environments where conventional open-cut construction may be impractical or disruptive. PCE's HDD capability covers:",
        steps: [
            {
                number: "01",
                title: "Assess",
                description: "Site visits, technical assessment, geological prospecting and surveying."
            },
            {
                number: "02",
                title: "Engineer",
                description: "Crossing design, mapping, engineering and execution planning."
            },
            {
                number: "03",
                title: "Drill",
                description: "Pilot-hole drilling and specialist guidance for controlled alignment."
            },
            {
                number: "04",
                title: "Ream",
                description: "Reaming supported by appropriate drilling-fluid and mud systems."
            },
            {
                number: "05",
                title: "Complete",
                description: "Pipeline fabrication, welding, NDT, hydrotesting, coating, pullback and crossing completion."
            }
        ]
    },
    epc: {
        id: "epc",
        number: "02",
        title: "Pipeline EPC",
        image: "/pictures/home-page/pipeline-drilling.jpg",
        headline: "From engineering decisions to a commissioned line.",
        subtext: "PCE provides engineering, procurement and construction solutions across the pipeline project lifecycle. Our construction scope combines open-cut pipeline construction, HDD and bored crossings with the specialist activities required to prepare the line for operation.",
        steps: [
            {
                number: "01",
                title: "Engineering",
                description: "Define the route, method, technical requirements, interfaces and execution approach."
            },
            {
                number: "02",
                title: "Procurement",
                description: "Coordinate the equipment, materials and project resources required for delivery."
            },
            {
                number: "03",
                title: "Construction",
                description: "Execute open-cut construction and specialist crossings, supported by welding, NDT, hydrotesting and coating."
            },
            {
                number: "04",
                title: "Pre-Commissioning & Commissioning",
                description: "Test, verify and prepare completed pipeline systems for handover and operation."
            }
        ]
    },
    bpds: {
        id: "bpds",
        number: "03",
        title: "BPDS Pipeline Location",
        image: "/pictures/home-page/pipeline-new.jpg",
        headline: "Know what is underground before work begins.",
        subtext: "Deeply buried operational pipelines can create significant uncertainty when new infrastructure must be constructed nearby. PCE's Buried Pipeline Detection System is designed to determine the three-dimensional position and depth of deeply buried steel pipelines—including beneath rivers, through mountainous terrain and in built environments.",
        steps: [
            {
                number: "01",
                title: "What BPDS Determines",
                description: "Three-dimensional pipeline position and burial depth."
            },
            {
                number: "02",
                title: "How It Works",
                description: "A defined magnetic signal is injected through the pipeline's test points. Dedicated sensors capture the resulting magnetic-field data, and proprietary processing calculates the pipeline's three-dimensional coordinates."
            },
            {
                number: "03",
                title: "Why It Matters",
                description: "More accurate knowledge of an existing pipeline's position can support safer engineering decisions and nearby construction planning without excavating around the deeply buried section."
            }
        ]
    },
    support: {
        id: "support",
        number: "04",
        title: "Equipment & Technical Support",
        image: "/pictures/home-page/equipment.jpg",
        headline: "Put the right resources behind the crossing.",
        subtext: "PCE supports HDD projects with specialist equipment, drilling tools, materials and technical expertise aligned to crossing requirements.",
        steps: [
            {
                number: "01",
                title: "Main HDD Equipment",
                description: "Drilling rigs, pumps and mud-recycling systems."
            },
            {
                number: "02",
                title: "Drilling Tools",
                description: "Reamers, drill bits, mud motors and supporting tools."
            },
            {
                number: "03",
                title: "Specialist Materials",
                description: "Bentonite and specialist drilling-fluid additives."
            },
            {
                number: "04",
                title: "Technical Support",
                description: "Crossing proposals, equipment planning and execution guidance for demanding HDD work."
            }
        ]
    }
};
