"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Star, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Experience = () => {
    const [expandedId, setExpandedId] = useState<string | null>("01");
    const { t } = useLanguage();

    return (
        <section id="about">
            <h2 className="text-2xl font-medium mb-12 tracking-tight">
                {t.experience.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 border-t border-neutral-800">
                    {t.experience.jobs.map((job) => {
                        const isOpen = expandedId === job.id;
                        return (
                            <div
                                key={job.id}
                                className="border-b border-neutral-800"
                            >
                                <button
                                    onClick={() =>
                                        setExpandedId(isOpen ? null : job.id)
                                    }
                                    className="w-full py-8 flex justify-between items-center text-left group"
                                    data-interactive
                                >
                                    <div className="flex items-baseline gap-6 md:gap-12">
                                        <span className="text-xs text-muted font-mono">
                                            {job.id}
                                        </span>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                                                {job.role}
                                            </h3>
                                            <p className="text-sm text-muted mt-1">
                                                {job.company}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm text-muted hidden md:block font-mono">
                                            {job.period}
                                        </span>
                                        <motion.div
                                            animate={{
                                                rotate: isOpen ? 45 : 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className="text-muted group-hover:text-foreground"
                                        >
                                            <Plus size={20} />
                                        </motion.div>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 pl-12 md:pl-20 max-w-2xl">
                                                <p className="text-muted leading-relaxed mb-6">
                                                    {job.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="text-xs px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/40 text-muted"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className="lg:col-span-1 h-full">
                    <a
                        href="https://kwork.ru/user/tameerlan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block h-full min-h-[250px] lg:min-h-[100%] rounded-3xl border border-neutral-800 bg-neutral-900/30 overflow-hidden group p-8 flex flex-col justify-end"
                        data-interactive
                    >
                        <div className="absolute inset-0 z-0 bg-[url('/kwork-rating.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-60" />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent z-10" />

                        <div className="relative z-20">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                    <Star
                                        fill="#fbbf24"
                                        color="#fbbf24"
                                        size={16}
                                    />
                                    <span className="text-white font-semibold font-mono text-sm leading-none pt-0.5">
                                        {t.experience.kworkStats.rating}
                                    </span>
                                </div>

                                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight
                                        size={16}
                                        className="text-white"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-medium text-foreground mb-1">
                                {t.experience.kworkStats.title}{" "}
                                <span className="text-accent">
                                    {t.experience.kworkStats.platform}
                                </span>
                            </h3>
                            <p className="text-sm text-muted">
                                {t.experience.kworkStats.orders}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};
