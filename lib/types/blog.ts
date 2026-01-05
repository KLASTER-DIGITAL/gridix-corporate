export interface BlogPostData {
    title: string;
    slug: string;
    excerpt: string;
    seoTitle?: string;
    seoDescription?: string;
    canonicalUrl?: string;
    author?: string;
    authorPosition?: string;
    image?: string;
    imageGradient?: string;
    category?: string;
    tags?: string[];
    publishedAt?: number | string;
    blocks?: unknown[];
}

export interface BuilderBlogPost {
    id: string;
    data: BlogPostData;
}
