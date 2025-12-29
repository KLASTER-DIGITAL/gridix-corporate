
export interface CaseStudyStat {
    label: string;
    value: string;
}

export interface CaseStudyTask {
    title: string;
    items: string;
}

export interface CaseStudySolution {
    feature: string;
    value: string;
}

export interface CaseStudyData {
    title: string;
    slug: string;
    company: string;
    seoTitle?: string;
    seoDescription?: string;
    canonicalUrl?: string;
    heroH1?: string;
    summary: string;
    industry?: string;
    country?: string;
    city?: string;
    segment?: string;
    portfolio?: string;
    launchPeriod?: string;
    modulesList?: string[];
    integrationsList?: string[];
    context?: string;
    tasksList?: CaseStudyTask[];
    solutionList?: CaseStudySolution[];
    resultsImpact?: string;
    testimonialQuote?: string;
    testimonialAuthor?: string;
    testimonialPosition?: string;
    image?: string;
    imageGradient?: string;
    stats?: CaseStudyStat[];
    blocks?: unknown[];
    date?: number | string;
}

export interface BuilderCaseStudy {
    id: string;
    data: CaseStudyData;
}
