import { Hero } from "../sections/Hero";
import { SectionProof } from "../sections/SectionProof";

import { SectionOutcomes } from "../sections/SectionOutcomes";

import { SectionProducts } from "../sections/SectionProducts";

import { SectionIntegrations } from "../sections/SectionIntegrations";
import { SectionCases } from "../sections/SectionCases";
import { SectionSecurity } from "../sections/SectionSecurity";
import { SectionPricing } from "../sections/SectionPricing";
import { SectionFinalCTA } from "../sections/SectionFinalCTA";

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
