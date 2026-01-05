import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

import { builder } from "@/lib/builder";
import Link from "next/link";
import Image from "next/image";
import { BuilderBlogPost, BlogPostData } from "@/lib/types/blog";

export const SectionBlog = async () => {
    // Check if API key is set before fetching
    if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
        return null;
    }

    const posts = (await builder.getAll("post", {
        options: { noTargeting: true },
        limit: 3,
        sort: {
            createdDate: -1,
        },
    })) as unknown as BuilderBlogPost[];

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                            Последние статьи
                        </h2>
                        <p className="text-lg text-slate-400 max-w-xl">
                            Полезные советы и актуальная информация о развитии недвижимости и маркетинге.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-4 items-center">
                        <Link href="/blog" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors">
                            Все статьи <ArrowRight className="w-4 h-4" />
                        </Link>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5 bg-transparent rounded-full">
                                <ArrowLeft className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5 bg-transparent rounded-full">
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((item) => (
                        <BlogCard
                            key={item.id}
                            title={item.data.title}
                            excerpt={item.data.excerpt}
                            author={item.data.author}
                            publishedAt={item.data.publishedAt}
                            image={item.data.image}
                            category={item.data.category}
                            imageGradient={item.data.imageGradient}
                            slug={item.data.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface BlogCardProps extends Partial<BlogPostData> {
    imageGradient?: string;
}

const BlogCard = ({ title, excerpt, author, publishedAt, image, category, imageGradient, slug }: BlogCardProps & { image?: string }) => (
    <Link href={`/blog/${slug}`} className="block group">
        <Card className="border-0 bg-transparent overflow-hidden h-full">
            <div className={`h-48 w-full rounded-2xl mb-6 relative ${imageGradient || 'bg-slate-800'} border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden`}>
                {image ? (
                    <Image
                        src={image}
                        alt={title || "Blog post"}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white/10 select-none">Blog</span>
                    </div>
                )}
            </div>
            <CardContent className="p-0">
                <div className="text-sm font-medium text-blue-400 mb-2">{category || 'Статья'}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors line-clamp-2">{title}</h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 uppercase tracking-wider pt-4 border-t border-white/10">
                    <div>{author || 'Gridix'}</div>
                    {publishedAt && (
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(publishedAt).toLocaleDateString('ru-RU')}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    </Link>
);
