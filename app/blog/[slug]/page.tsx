import { builder } from "@/lib/builder";
import { notFound } from "next/navigation";
import { RenderBuilderContent } from "@/components/builder-renderer";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BuilderBlogPost } from "@/lib/types/blog";
import { BuilderContent } from "@builder.io/sdk";
import { Metadata } from "next";

export const revalidate = 60;

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

async function getBlogContent(slug: string) {
    const content = (await builder.get("post", {
        query: {
            "data.slug": slug,
        },
    }).promise()) as unknown as BuilderBlogPost;
    return content;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    const content = await getBlogContent(slug);

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
    const posts = (await builder.getAll("post", {
        options: { noTargeting: true },
        fields: "data.slug",
    })) as unknown as BuilderBlogPost[];

    return posts.map((item) => ({
        slug: item.data.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return (
            <main className="min-h-screen bg-slate-950 pt-32 pb-24 flex items-center justify-center text-slate-400">
                Builder.io API key is missing.
            </main>
        );
    }

    const content = await getBlogContent(slug);

    if (!content) {
        notFound();
    }

    const { data } = content;

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            {/* Breadcrumbs */}
            <div className="pt-32 pb-8 border-b border-white/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Главная</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-blue-400 transition-colors">Блог</Link>
                        <span>/</span>
                        <span className="text-white truncate max-w-[200px]">{data.category || "Статья"}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="container px-4 md:px-6 mx-auto relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            {data.category || "Блог GRIDIX"}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 font-medium">
                            {data.excerpt}
                        </p>

                        {/* Article Meta */}
                        <div className="flex flex-wrap items-center gap-6 pb-12 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-white text-lg">
                                    {data.author?.charAt(0) || "G"}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">{data.author || "Gridix"}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">{data.authorPosition || "Автор"}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                <Calendar className="w-4 h-4" />
                                {data.publishedAt ? new Date(data.publishedAt).toLocaleDateString('ru-RU', { 
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : '2025'}
                            </div>
                            {data.tags && data.tags.length > 0 && (
                                <div className="flex items-center gap-2 ml-auto">
                                    {data.tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-xs font-bold bg-white/5 text-slate-300 px-3 py-1 rounded-lg border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            {data.image && (
                <section className="py-12">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Article Content */}
            <section className="py-24 bg-white/[0.01]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-12 prose prose-invert max-w-none">
                            {/* Builder Content Blocks */}
                            {content.data?.blocks && content.data.blocks.length > 0 && (
                                <RenderBuilderContent content={content as unknown as BuilderContent} model="post" />
                            )}

                            {/* Fallback Paragraph */}
                            {(!content.data?.blocks || content.data.blocks.length === 0) && (
                                <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 text-slate-300">
                                    <p className="text-lg leading-relaxed">
                                        Содержание статьи загружается из Builder.io. Добавьте содержимое в блоки Builder для этого поста.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="sticky top-32 space-y-6">
                                {/* Article Stats */}
                                <div className="bg-slate-900/80 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl shadow-2xl ring-1 ring-white/10">
                                    <h3 className="text-lg font-black text-white mb-6 flex items-center gap-3 uppercase tracking-tighter">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        О статье
                                    </h3>
                                    <div className="space-y-6">
                                        {data.category && (
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Категория</div>
                                                <div className="text-base text-white font-medium">{data.category}</div>
                                            </div>
                                        )}
                                        {data.author && (
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Автор</div>
                                                <div className="text-base text-white font-medium">{data.author}</div>
                                            </div>
                                        )}
                                        {data.publishedAt && (
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Опубликовано</div>
                                                <div className="text-base text-white font-medium">
                                                    {new Date(data.publishedAt).toLocaleDateString('ru-RU', { 
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                        {data.tags && data.tags.length > 0 && (
                                            <div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Теги</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {data.tags.map((tag, i) => (
                                                        <span key={i} className="text-xs font-bold bg-blue-600/10 text-blue-300 px-3 py-1.5 rounded-lg border border-blue-500/20">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* CTA Box */}
                                <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl shadow-blue-600/20">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="relative">
                                        <h3 className="text-xl font-black text-white mb-3">Узнайте больше</h3>
                                        <p className="text-sm text-blue-100 mb-6">
                                            Свяжитесь с нами, чтобы узнать как GRIDIX может помочь вашему бизнесу.
                                        </p>
                                        <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-black py-3 rounded-xl transition-all active:scale-95">
                                            Обсудить проект
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts CTA */}
            <section className="py-24 border-t border-white/5">
                <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 max-w-2xl">
                        Читайте другие статьи
                    </h2>
                    <Link href="/blog">
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-12 h-16 rounded-[1.5rem] text-lg uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-blue-600/20 inline-flex items-center gap-2">
                            Все статьи
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
