"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Coins, Globe, Handshake, LayoutGrid, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionFinalCTA } from "@/components/sections/SectionFinalCTA"

export const PartnerProgramPage = () => {
    return (
        <main className="flex flex-col w-full min-h-screen bg-slate-50 selection:bg-blue-100 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

                <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        <Handshake className="w-4 h-4" />
                        <span>Partner Ecosystem</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
                    >
                        Earn up to <span className="text-blue-400">50%</span> revenue share with GRIDIX
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                    >
                        Help developers sell faster and transparently. Join the ecosystem of the fastest-growing PropTech platform globally.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-base font-semibold transition-all hover:scale-105" asChild>
                            <Link href="https://app.gridix.live/ru/">
                                Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why GRIDIX is easy to sell</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            We solve real pains for developers with a product that creates a "Wow" effect instantly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Zap className="w-8 h-8 text-amber-500" />}
                            title="Immediate Value"
                            desc="Developers see the visual difference instantly compared to legacy list views."
                        />
                        <FeatureCard
                            icon={<LayoutGrid className="w-8 h-8 text-blue-500" />}
                            title="Global Scalability"
                            desc="Works for single buildings and massive city-districts with equal ease."
                        />
                        <FeatureCard
                            icon={<Coins className="w-8 h-8 text-green-500" />}
                            title="Growing Market"
                            desc="PropTech demand is surging across CIS, MENA, and Europe."
                        />
                    </div>
                </div>
            </section>

            {/* Tiers Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose your partnership level</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Basic Partner */}
                        <Card className="border-slate-200 shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900">Basic Partner</CardTitle>
                                <CardDescription className="text-lg">Marketers, Agents, Consultants</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-slate-900">20%</span>
                                    <span className="text-slate-500 font-medium">revenue share</span>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span>Share your referral link</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span>Access to payout dashboard</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span>No technical implementation required</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" asChild>
                                    <Link href="https://app.gridix.live/ru/">Start Earning</Link>
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Integrator Partner */}
                        <Card className="border-blue-600 shadow-xl ring-4 ring-blue-600/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                                RECOMMENDED
                            </div>
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 text-white">
                                    <LayoutGrid className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900">Integrator Partner</CardTitle>
                                <CardDescription className="text-lg">Digital Agencies, CRM Integrators</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-slate-900">50%</span>
                                    <span className="text-slate-500 font-medium">revenue share</span>
                                </div>
                                <div className="text-sm text-slate-500 mb-4">
                                    (40% for first 10 clients, 50% thereafter)
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span>Create & Manage Client Workspaces</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span>Certified "GRIDIX Partner" Status</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span>Turn implementation into recurring revenue</span>
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white" asChild>
                                    <Link href="https://app.gridix.live/ru/">Become an Integrator</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            <SectionFinalCTA />
        </main>
    )
}

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
        <div className="mb-4 bg-white p-4 rounded-xl shadow-sm">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-snug">
            {desc}
        </p>
    </div>
)
