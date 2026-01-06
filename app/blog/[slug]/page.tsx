import { builder } from "@/lib/builder";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar } from "lucide-react";
import { RichTextContent } from "@/components/RichTextContent";
import { BuilderBlogPost } from "@/lib/types/blog-post";

export const revalidate = 60;

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

async function getPostContent(slug: string) {
    const content = (await builder
        .get("blog-post", {
            query: {
                "data.slug": slug,
            },
        })
        .promise()) as unknown as BuilderBlogPost;

    return content;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const content = await getPostContent(slug);

    if (!content) return {};

    const { data } = content;
    return {
        title: data.seoTitle || data.title,
        description: data.seoDescription || data.excerpt,
        alternates: {
            canonical: data.canonicalUrl,
        },
    };
}

export async function generateStaticParams() {
    const posts = (await builder.getAll("blog-post", {
        options: { noTargeting: true },
        fields: "data.slug",
    })) as unknown as BuilderBlogPost[];

    return posts.map((item) => ({
        slug: item.data.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return (
            <main className="min-h-screen bg-slate-950 pt-32 pb-24 flex items-center justify-center text-slate-400">
                Builder.io API key is missing.
            </main>
        );
    }

    const content = await getPostContent(slug);

    if (!content) {
        notFound();
    }

    const { data } = content;

    console.log("content", content);

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
            {/* Breadcrumbs */}
            <div className="pt-32 pb-8 border-b border-white/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <Link href="/" className="hover:text-indigo-300 transition-colors">Главная</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-indigo-300 transition-colors">Блог</Link>
                        <span>/</span>
                        <span className="text-white truncate max-w-[520px]">{data.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="container px-4 md:px-6 mx-auto relative">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                            <Calendar className="w-3 h-3" />
                            {data.date ? new Date(data.date).toLocaleDateString("ru-RU") : "NEW"}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                            {data.title}
                        </h1>
                        {data.excerpt && (
                            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                                {data.excerpt}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Cover */}
            {data.coverImage && (
                <section className="pb-16">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900">
                            <Image src={data.coverImage} alt={data.title} fill className="object-cover opacity-90" priority />
                        </div>
                    </div>
                </section>
            )}

            {/* Content */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl">
                        {content.data?.content ? (
                            <RichTextContent html={content.data.content} />
                        ) : (
                            <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] p-10 backdrop-blur-sm">
                                <p className="text-slate-300 font-medium leading-relaxed">
                                    Этот пост пока без контента — откройте запись в Builder.io и добавьте контент в поле content.
                                </p>
                            </div>
                        )}

                        <div className="mt-16 pt-10 border-t border-white/5">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-black uppercase text-xs tracking-widest">
                                <ArrowLeft className="w-4 h-4" />
                                Все посты
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


