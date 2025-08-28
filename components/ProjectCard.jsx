"use client"; // Директива "use client" теперь нужна только для обертки

import { useRef } from "react";
import { Button } from "./ui/Button";

// --- КОМПОНЕНТ-ОБЕРТКА С КЛИЕНТСКОЙ ЛОГИКОЙ ---
const ProjectCardWithSpotlight = ({ project, onImageClick }) => {
    const cardRef = useRef(null);

    // --- ОБРАБОТЧИК ДВИЖЕНИЯ МЫШИ ---
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="relative spotlight-card h-full"
        >
            <ProjectCardUI project={project} onImageClick={onImageClick} />
        </div>
    );
};

const ProjectCardUI = ({ project, onImageClick }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col group h-full backdrop-blur-lg transition-all hover:bg-white/10">
        {/* --- БЛОК: БЕЙДЖ "В РАЗРАБОТКЕ" --- */}
        {project.inDevelopment && (
            <div className="absolute top-4 right-4 z-20 px-3 py-1 text-xs font-bold text-black bg-yellow-400 rounded-full shadow-lg">
                В разработке
            </div>
        )}

        {/* Обертка для контента, чтобы z-index работал правильно */}
        <div className="relative z-10 flex flex-col flex-grow">
            <div
                // Делаем курсор 'not-allowed' для проектов в разработке
                className={`overflow-hidden ${
                    project.inDevelopment
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                }`}
                onClick={!project.inDevelopment ? onImageClick : undefined} // Вызываем onImageClick только если не в разработке
            >
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                        project.inDevelopment ? "grayscale" : ""
                    }`} // Делаем картинку серой
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                </h3>
                <p className="text-white/60 mb-4 flex-grow text-sm">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 mt-auto">
                    <a
                        href={
                            project.inDevelopment ? undefined : project.liveUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                        // Предотвращаем клик, если в разработке
                        onClick={(e) =>
                            project.inDevelopment && e.preventDefault()
                        }
                    >
                        <Button
                            className="w-full"
                            disabled={project.inDevelopment}
                        >
                            Демо
                        </Button>
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button variant="secondary" className="w-full">
                            Код
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

// --- ЭКСПОРТИРУЕМ ОБЕРТКУ КАК КОМПОНЕНТ ПО УМОЛЧАНИЮ ---
export const ProjectCard = ProjectCardWithSpotlight;
