import { Button } from "./ui/Button";

export const ProjectCard = ({ project }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col group h-full backdrop-blur-lg transition-all hover:bg-white/10">
        <div className="overflow-hidden">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button className="w-full">Демо</Button>
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
);
