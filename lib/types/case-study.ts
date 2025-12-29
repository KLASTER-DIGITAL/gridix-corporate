
export interface CaseStudyStat {
    label: string;
    value: string;
}

export interface CaseStudyData {
    title: string;
    slug: string;
    company: string;
    summary: string;
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
