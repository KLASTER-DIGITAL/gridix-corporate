'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { builder } from "@builder.io/react";
import Link from "next/link";
import Image from "next/image";
import { BuilderCaseStudy, CaseStudyData } from "@/lib/types/case-study";

export const SectionCases = () => {
    const [cases, setCases] = useState<BuilderCaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const results = await builder.getAll("cases-study", {
                    options: { noTargeting: true },
                    limit: 3,
                    fields: "data.title,data.slug,data.company,data.image,data.stats,data.imageGradient",
                    sort: {
                        createdDate: -1,
                    },
                });
                setCases(results as unknown as BuilderCaseStudy[]);
            } catch (error) {
                console.error("Error fetching cases:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCases();
    }, []);

    if (loading) {
        return (
            <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="h-64 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (cases.length === 0) return null;

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                            Результаты внедрения
                        </h2>
                        <p className="text-lg text-slate-400 max-w-xl">
                            Реальные показатели девелоперов после перехода на экосистему GRIDIX.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-4 items-center">
                        <Link href="/cases" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors">
                            Все кейсы <ArrowRight className="w-4 h-4" />
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
                    {cases.map((item) => (
                        <CaseCard
                            key={item.id}
                            company={item.data.company}
                            title={item.data.title}
                            stats={item.data.stats}
                            imageClass={item.data.imageGradient}
                            image={item.data.image}
                            slug={item.data.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface CaseCardProps extends Partial<CaseStudyData> {
    imageClass?: string;
}

const CaseCard = ({ company, title, stats, imageClass, image, slug }: CaseCardProps & { image?: string }) => (
    <Link href={`/cases/${slug}`} className="block group">
        <Card className="border-0 bg-transparent overflow-hidden h-full">
            <div className={`h-48 w-full rounded-2xl mb-6 relative ${imageClass || 'bg-slate-800'} border border-white/10 group-hover:border-white/20 transition-colors overflow-hidden`}>
                {image ? (
                    <Image
                        src={image}
                        alt={title || company || "Case study"}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white/10 select-none">{company}</span>
                    </div>
                )}
            </div>
            <CardContent className="p-0">
                <div className="text-sm font-medium text-blue-400 mb-2">{company}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">{title}</h3>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    {stats?.map((s, i) => (
                        <div key={i}>
                            <div className="text-2xl font-bold text-white">{s.value}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </Link>
);
