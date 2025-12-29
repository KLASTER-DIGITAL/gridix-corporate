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
    {
        component: CaseHero,
        name: "Case Study: Hero",
        inputs: [
            { name: "title", type: "string", defaultValue: "Название кейса" },
            { name: "subtitle", type: "string", defaultValue: "Краткое описание того, что было сделано" },
            { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"] },
            { name: "country", type: "string", defaultValue: "Казахстан" },
            { name: "city", type: "string", defaultValue: "Алматы" },
            { name: "segment", type: "string", defaultValue: "Жилая недвижимость" },
            {
                name: "kpis",
                type: "list",
                subFields: [
                    { name: "value", type: "string", defaultValue: "+25%" },
                    { name: "label", type: "string", defaultValue: "Рост продаж" },
                ],
            },
        ],
    },
    {
        component: KpiCardsRow,
        name: "Case Study: KPI Row",
        inputs: [
            {
                name: "kpis",
                type: "list",
                subFields: [
                    { name: "value", type: "string", defaultValue: "+25%" },
                    { name: "label", type: "string", defaultValue: "Рост продаж" },
                ],
            },
        ],
    },
    {
        component: ProjectFactsTable,
        name: "Case Study: Project Facts",
        inputs: [
            { name: "country", type: "string" },
            { name: "city", type: "string" },
            { name: "segment", type: "string" },
            { name: "portfolio", type: "string" },
            { name: "launchDate", type: "string" },
            { name: "modules", type: "list", subFields: [{ name: "item", type: "string" }] },
            { name: "integrations", type: "list", subFields: [{ name: "item", type: "string" }] },
        ],
    },
    {
        component: ProblemSection,
        name: "Case Study: Context & Problem",
        inputs: [
            { name: "title", type: "string", defaultValue: "Контекст и проблема" },
            { name: "content", type: "longText", defaultValue: "Описание проблемы..." },
        ],
    },
    {
        component: TasksCards,
        name: "Case Study: Tasks",
        inputs: [
            {
                name: "tasks",
                type: "list",
                subFields: [
                    { name: "title", type: "string", defaultValue: "Задача №1" },
                    { name: "description", type: "string" },
                    { name: "bullets", type: "list", subFields: [{ name: "item", type: "string" }] },
                ],
            },
        ],
    },
    {
        component: SolutionFeatures,
        name: "Case Study: Solution",
        inputs: [
            { name: "title", type: "string", defaultValue: "Что мы сделали в GRIDIX v1" },
            {
                name: "features",
                type: "list",
                subFields: [
                    { name: "title", type: "string", defaultValue: "Фича" },
                    { name: "benefit", type: "string", defaultValue: "Ценность для бизнеса" },
                ],
            },
        ],
    },
    {
        component: ResultsGrid,
        name: "Case Study: Results",
        inputs: [
            { name: "title", type: "string", defaultValue: "Результаты внедрения" },
            {
                name: "kpis",
                type: "list",
                subFields: [
                    { name: "value", type: "string", defaultValue: "+25%" },
                    { name: "label", type: "string", defaultValue: "Рост продаж" },
                    { name: "description", type: "string" },
                ],
            },
            { name: "moneyImpact", type: "longText" },
        ],
    },
    {
        component: TestimonialCard,
        name: "Case Study: Testimonial",
        inputs: [
            { name: "quote", type: "longText", defaultValue: "Текст цитаты..." },
            { name: "author", type: "string", defaultValue: "Имя Фамилия" },
            { name: "position", type: "string", defaultValue: "Должность" },
            { name: "company", type: "string" },
        ],
    },
    {
        component: ModulesTags,
        name: "Case Study: Modules",
        inputs: [
            { name: "title", type: "string", defaultValue: "Использовали в GRIDIX v1" },
            { name: "modules", type: "list", subFields: [{ name: "item", type: "string" }] },
        ],
    },
    {
        component: FaqAccordion,
        name: "Case Study: FAQ",
        inputs: [
            { name: "title", type: "string", defaultValue: "Часто задаваемые вопросы" },
            {
                name: "faqs",
                type: "list",
                subFields: [
                    { name: "question", type: "string" },
                    { name: "answer", type: "longText" },
                ],
            },
        ],
    },
    {
        component: CtaBanner,
        name: "Case Study: Final CTA",
        inputs: [
            { name: "title", type: "string", defaultValue: "Готовы оцифровать свои продажи?" },
            { name: "description", type: "longText", defaultValue: "Запишитесь на демонстрацию..." },
        ],
    },
    {
        component: RelatedCasesGrid,
        name: "Case Study: Related Cases",
        inputs: [
            { name: "title", type: "string", defaultValue: "Другие кейсы" },
            {
                name: "cases",
                type: "list",
                subFields: [
                    { name: "slug", type: "string" },
                    { name: "title", type: "string" },
                    { name: "country", type: "string" },
                    { name: "kpi", type: "string" },
                    { name: "image", type: "file" },
                ],
            },
        ],
    },
];
