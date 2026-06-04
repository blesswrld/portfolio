"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    tech: string[];
    imageColor: string;
    link: string;
}

export const ProjectCard = ({
    title,
    category,
    tech,
    imageColor,
    link,
}: ProjectCardProps) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-full w-full rounded-3xl border border-neutral-800 overflow-hidden group flex flex-col justify-end p-6 md:p-8 cursor-pointer block"
            data-interactive
        >
            <div
                className={`absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-110 ${imageColor}`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-20 flex justify-between items-end">
                <div>
                    <p className="text-xs font-mono text-muted mb-2 uppercase tracking-wider">
                        {category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium text-foreground">
                        {title}
                    </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shrink-0 ml-4">
                    <ArrowUpRight size={20} className="text-white" />
                </div>
            </div>

            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex flex-wrap gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-[80%]">
                {tech.map((t) => (
                    <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white shadow-lg"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.a>
    );
};
