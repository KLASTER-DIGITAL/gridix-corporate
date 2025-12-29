"use client";
import { builder } from "@builder.io/react";
import { CtaButton } from "./CtaButton";
import { JsonLd } from "./JsonLd";
import { Hero } from "./sections/Hero";
import { SectionProof } from "./sections/SectionProof";
import { SectionRoles } from "./sections/SectionRoles";
import { SectionOutcomes } from "./sections/SectionOutcomes";
import { SectionProcessMap } from "./sections/SectionProcessMap";
import { SectionProducts } from "./sections/SectionProducts";
import { SectionSmartCatalog } from "./sections/SectionSmartCatalog";
import { SectionMarketplace } from "./sections/SectionMarketplace";
import { SectionIntegrations } from "./sections/SectionIntegrations";
import { SectionCases } from "./sections/SectionCases";
import { SectionPricing } from "./sections/SectionPricing";
import { SectionFinalCTA } from "./sections/SectionFinalCTA";
import { HomePage } from "./templates/HomePage";
import { CaseHero } from "./cases/CaseHero";
import { KpiCardsRow } from "./cases/KpiCardsRow";
import { ProjectFactsTable } from "./cases/ProjectFactsTable";
import { ProblemSection } from "./cases/ProblemSection";
import { TasksCards } from "./cases/TasksCards";
import { SolutionFeatures } from "./cases/SolutionFeatures";
import { ResultsGrid } from "./cases/ResultsGrid";
import { TestimonialCard } from "./cases/TestimonialCard";
import { ModulesTags } from "./cases/ModulesTags";
import { FaqAccordion } from "./cases/FaqAccordion";
import { CtaBanner } from "./cases/CtaBanner";
import { RelatedCasesGrid } from "./cases/RelatedCasesGrid";

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (apiKey) {
    builder.init(apiKey);
} else {
    console.warn('[Builder Registry] API key is missing');
}

export const customComponents = [
    {
        component: CtaButton,
        name: "CtaButton",
        inputs: [
            { name: "label", type: "string", defaultValue: "Click Me" },
            { name: "href", type: "string", defaultValue: "#" },
            { name: "variant", type: "string", enum: ["primary", "secondary"], defaultValue: "primary" },
        ],
    },
    {
        component: JsonLd,
        name: "JsonLd",
        inputs: [
            { name: "json", type: "string", defaultValue: "{}" },
        ],
    },
    { component: Hero, name: "Section: Hero" },
    { component: SectionProof, name: "Section: Proof" },
    { component: SectionRoles, name: "Section: Roles" },
    { component: SectionOutcomes, name: "Section: Outcomes" },
    { component: SectionProcessMap, name: "Section: Process Map" },
    { component: SectionProducts, name: "Section: Products" },
    { component: SectionSmartCatalog, name: "Section: Smart Catalog" },
    { component: SectionMarketplace, name: "Section: Marketplace" },
    { component: SectionIntegrations, name: "Section: Integrations" },
    { component: SectionCases, name: "Section: Cases" },
    { component: SectionPricing, name: "Section: Pricing" },
    { component: SectionFinalCTA, name: "Section: Final CTA" },
    { component: HomePage, name: "Template: Home Page" },
];
