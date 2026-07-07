"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const { lang, setLang, t } = useLanguage();

    const toggleLang = () => {
        setLang(lang === "en" ? "ru" : "en");
    };

    return (
        <main className="min-h-screen px-6 py-12 md:px-24 md:py-16 max-w-7xl mx-auto">
            <header className="fixed top-0 left-0 w-full p-6 md:px-24 z-40 backdrop-blur-md bg-background/70 border-b border-white/5">
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    <span className="font-semibold text-lg tracking-tight">
                        dev.
                    </span>
                    <div className="flex items-center gap-6 text-sm text-muted">
                        <a
                            href="#projects"
                            className="hover:text-foreground transition-colors hidden md:block"
                            data-interactive
                        >
                            {t.nav.projects}
                        </a>
                        <a
                            href="#services"
                            className="hover:text-foreground transition-colors hidden md:block"
                            data-interactive
                        >
                            {t.nav.pricing}
                        </a>
                        <a
                            href="#about"
                            className="hover:text-foreground transition-colors hidden md:block"
                            data-interactive
                        >
                            {t.nav.about}
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-foreground transition-colors hidden md:block"
                            data-interactive
                        >
                            {t.nav.contact}
                        </a>
                        <button
                            onClick={toggleLang}
                            className="ml-4 font-mono uppercase text-xs px-2 py-1 border border-neutral-800 rounded-md hover:text-foreground hover:border-foreground transition-all"
                            data-interactive
                        >
                            {lang === "en" ? "RU" : "EN"}
                        </button>
                    </div>
                </nav>
            </header>

            <section className="mt-20 mb-20 flex flex-col items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-muted mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {t.hero.badge}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[1.1] mb-6">
                        {t.hero.title1} <br className="hidden md:block" />
                        <span className="text-muted">{t.hero.title2}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 whitespace-pre-line">
                        {t.hero.desc}
                    </p>
                    <Magnetic>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
                            data-interactive
                        >
                            {t.hero.btn} <ArrowDownRight size={18} />
                        </a>
                    </Magnetic>
                </motion.div>
            </section>

            <section id="projects" className="mb-20">
                <Reveal>
                    <h2 className="text-2xl font-medium mb-8 tracking-tight">
                        {t.projects.title}
                    </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[350px]">
                    <Reveal className="md:col-span-2 h-full w-full" delay={0.1}>
                        <ProjectCard
                            title={t.projects.items.p1}
                            category={t.projects.categories.promo}
                            tech={["React", "Three.js", "Tailwind CSS"]}
                            imageColor="bg-[url('/iphone.jpg')] bg-cover bg-center"
                            link="https://apple-iphone-phi.vercel.app"
                        />
                    </Reveal>
                    <Reveal className="col-span-1 h-full w-full" delay={0.2}>
                        <ProjectCard
                            title={t.projects.items.p2}
                            category={t.projects.categories.creative}
                            tech={["React", "GSAP", "Tailwind CSS"]}
                            imageColor="bg-[url('/mojito.jpg')] bg-cover bg-center"
                            link="https://gsap-mojito-phi.vercel.app"
                        />
                    </Reveal>
                    <Reveal className="col-span-1 h-full w-full" delay={0.3}>
                        <ProjectCard
                            title={t.projects.items.p3}
                            category={t.projects.categories.corp}
                            tech={["React", "Vite", "Tailwind CSS"]}
                            imageColor="bg-[url('/brainwave.jpg')] bg-cover bg-center"
                            link="https://brainwave-sooty-ten.vercel.app"
                        />
                    </Reveal>
                    <Reveal className="md:col-span-2 h-full w-full" delay={0.4}>
                        <ProjectCard
                            title={t.projects.items.p4}
                            category={t.projects.categories.app}
                            tech={["Next.js", "TypeScript", "Tailwind CSS"]}
                            imageColor="bg-[url('/codesync.jpg')] bg-cover bg-top"
                            link="https://codesync-platform-demo.vercel.app"
                        />
                    </Reveal>
                </div>
            </section>

            <section className="w-full overflow-hidden whitespace-nowrap h-24 md:h-32 border-y border-neutral-800 flex items-center mb-20">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 40,
                        repeat: Infinity,
                    }}
                    className="flex flex-nowrap text-4xl md:text-6xl font-medium text-neutral-800 leading-none -mt-2 md:-mt-4"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex shrink-0 items-center">
                            <span className="hover:text-foreground transition-colors cursor-default">
                                React • Next.js • TypeScript • JavaScript •
                                Tailwind CSS • Framer Motion • GSAP • Zustand •
                                Redux • TanStack Query • Node.js • PostgreSQL •
                                MongoDB • Prisma • Supabase • Vite •&nbsp;
                            </span>
                        </div>
                    ))}
                </motion.div>
            </section>

            <section id="services" className="mb-20">
                <Reveal>
                    <h2 className="text-2xl font-medium mb-8 tracking-tight">
                        {t.pricing.title}
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 min-[1040px]:grid-cols-3 gap-4 auto-rows-auto mb-8">
                    {t.pricing.services.map((service, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.05}
                            className="h-full"
                        >
                            <div className="p-6 md:p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 h-full flex flex-col justify-between min-h-[220px]">
                                <div>
                                    <h3 className="text-lg md:text-xl font-medium text-foreground mb-3 whitespace-pre-line">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                </div>
                                <span className="text-accent font-semibold text-lg md:text-xl font-mono shrink-0">
                                    {service.price}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.3}>
                    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/10 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-xs font-mono text-muted">
                            {t.pricing.disclaimer}
                        </p>
                        <Magnetic>
                            <a
                                href="https://t.me/tamerlan_webdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-6 py-3 rounded-full font-medium transition-colors text-sm"
                                data-interactive
                            >
                                {t.pricing.btn} <ArrowUpRight size={16} />
                            </a>
                        </Magnetic>
                    </div>
                </Reveal>
            </section>

            <Reveal>
                <div className="mb-20">
                    <Experience />
                </div>
            </Reveal>

            <Reveal direction="up">
                <Contact />
            </Reveal>
        </main>
    );
}
