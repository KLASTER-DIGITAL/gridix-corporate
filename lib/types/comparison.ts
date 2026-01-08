export interface ComparisonFeature {
    featureName: string;
    competitorValue: string | boolean;
    gridixV1Value: string | boolean;
    gridixV2Value: string | boolean;
    isHighlighted?: boolean;
}

export interface ComparisonCategory {
    categoryName: string;
    features: ComparisonFeature[];
}

export interface ComparisonSpotlight {
    title: string;
    description: string;
    statValue: string;
    statLabel: string;
    image?: string;
}

export interface ComparisonPainPoint {
    title: string;
    description: string;
}

export interface ComparisonData {
    title: string;
    slug: string;
    heroBadge?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    competitorName?: string;
    competitorDescriptionShort?: string;
    competitorBulletPoints?: string[];
    gridixBulletPoints?: string[];
    comparisonTable?: ComparisonCategory[];
    spotlights?: ComparisonSpotlight[];
    whySwitchTitle?: string;
    whySwitchSubtitle?: string;
    painPoints?: ComparisonPainPoint[];
    seoTitle?: string;
    seoDescription?: string;
}
