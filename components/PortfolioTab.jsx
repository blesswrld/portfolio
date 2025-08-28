"use client";

import { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SpotlightCard } from "./SpotlightCard"; // <-- ИМПОРТИРУЕМ ОБЕРТКУ
import { AnimatePresence, motion } from "framer-motion";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const INITIAL_COUNT = 8;

export const PortfolioTab = () => {
    const [selectedProject, setSelectedProject] = useState(null); // Добавляем состояние

    const handleOpenModal = (project) => {
        // Добавляем обработчик
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        // Добавляем обработчик
        setSelectedProject(null);
    };

    return (
        // Используем React Fragment, чтобы добавить модальное окно на том же уровне
        <>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projectsData
                                    .slice(
                                        0,
                                        open
                                            ? projectsData.length
                                            : INITIAL_COUNT
                                    )
                                    .map((project, index) => (
                                        <motion.div
                                            key={project.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay:
                                                    index >= INITIAL_COUNT
                                                        ? (index -
                                                              INITIAL_COUNT) *
                                                          0.05
                                                        : 0,
                                            }}
                                        >
                                            {/* --- ОБАРАЧИВАЕМ КАРТОЧКУ В ОБЕРТКУ --- */}
                                            <SpotlightCard>
                                                <ProjectCard
                                                    project={project}
                                                    onImageClick={() =>
                                                        handleOpenModal(project)
                                                    }
                                                />
                                            </SpotlightCard>
                                        </motion.div>
                                    ))}
                            </div>

                            {projectsData.length > INITIAL_COUNT && (
                                <div className="mt-12 text-center">
                                    <DisclosureButton className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                                        <span>
                                            {open
                                                ? "Скрыть"
                                                : `Показать еще ${
                                                      projectsData.length -
                                                      INITIAL_COUNT
                                                  }`}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: open ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDownIcon className="w-5 h-5 fill-white/80" />
                                        </motion.div>
                                    </DisclosureButton>
                                </div>
                            )}
                        </>
                    )}
                </Disclosure>
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>

            {/* Добавляем рендер модального окна */}
            <ProjectModal
                project={selectedProject}
                onClose={handleCloseModal}
            />
        </>
    );
};
