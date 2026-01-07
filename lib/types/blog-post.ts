
export interface BlogPostData {
    title: string;
    slug: string;
    excerpt?: string;
    date?: number | string;
    coverImage?: string;
    seoTitle?: string;
    seoDescription?: string;
    canonicalUrl?: string;
    blocks?: unknown[];
    content?: string;
}

export interface BuilderBlogPost {
    id: string;
    data: BlogPostData;
}


