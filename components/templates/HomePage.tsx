import dynamic from 'next/dynamic';
import { Hero } from "../sections/Hero";
import { SectionProof } from "../sections/SectionProof";

// Dynamically import heavier sections to improve initial page load
const SectionOutcomes = dynamic(() => import("../sections/SectionOutcomes").then(mod => ({ default: mod.SectionOutcomes })), {
    loading: () => <div className="h-96 bg-slate-50" />
});

const SectionProducts = dynamic(() => import("../sections/SectionProducts").then(mod => ({ default: mod.SectionProducts })), {
    loading: () => <div className="h-96 bg-slate-50" />
});

const SectionIntegrations = dynamic(() => import("../sections/SectionIntegrations").then(mod => ({ default: mod.SectionIntegrations })), {
    loading: () => <div className="h-24 bg-slate-50" />
});

const SectionCases = dynamic(() => import("../sections/SectionCases").then(mod => ({ default: mod.SectionCases })), {
    loading: () => <div className="h-96 bg-slate-900" />,
    ssr: true
});

const SectionSecurity = dynamic(() => import("../sections/SectionSecurity").then(mod => ({ default: mod.SectionSecurity })), {
    loading: () => <div className="h-96 bg-white" />
});

const SectionPricing = dynamic(() => import("../sections/SectionPricing").then(mod => ({ default: mod.SectionPricing })), {
    loading: () => <div className="h-96 bg-slate-50" />
});

const SectionFinalCTA = dynamic(() => import("../sections/SectionFinalCTA").then(mod => ({ default: mod.SectionFinalCTA })), {
    loading: () => <div className="h-96 bg-slate-900" />
});

export const HomePage = () => {
    return (
        <main className="flex flex-col w-full">
            <Hero />
            <SectionProof />
            <SectionProducts />
            <SectionOutcomes />
            <SectionIntegrations />
            <SectionCases />
            <SectionSecurity />
            <SectionPricing />
            <SectionFinalCTA />
        </main>
    );
};
