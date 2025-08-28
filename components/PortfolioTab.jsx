"use client";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export const PortfolioTab = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </motion.div>
);
