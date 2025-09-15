"use client";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from "@headlessui/react";
import {
    XMarkIcon,
    InformationCircleIcon,
    MagnifyingGlassPlusIcon,
    MagnifyingGlassMinusIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

// --- КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ИЗОБРАЖЕНИЯ С МАСШТАБОМ ---
const ZoomableImage = ({
    src,
    alt,
    scale,
    onDoubleClick,
    isLoading,
    onImageLoad,
}) => {
    return (
        <div className="relative w-full min-h-full flex items-center justify-center bg-white/5 rounded-md">
            {/* Условно рендерим лоадер */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-12 w-12 text-white/50 animate-spin" />
                </div>
            )}

            <img
                src={src}
                alt={alt}
                onLoad={onImageLoad} // Сообщаем о загрузке
                className={`transition-opacity duration-300 ease-out origin-center ${
                    isLoading ? "opacity-0" : "opacity-100" // Плавное появление
                }`}
                style={{
                    transform: `scale(${scale})`,
                    touchAction: "none",
                }}
                onDoubleClick={onDoubleClick}
            />
        </div>
    );
};

// Компонент-предупреждение
const ScreenshotWarning = () => (
    <div className="flex items-center gap-2 p-3 text-xs text-amber-300/80 bg-amber-900/20 border border-amber-500/20 rounded-lg mb-4">
        <InformationCircleIcon className="w-5 h-5 flex-shrink-0" />
        <span>
            Некоторые анимации или интерактивные элементы могут некорректно
            отображаться на полностраничном скриншоте. Для полного впечатления,
            пожалуйста, посетите демо-версию сайта.
        </span>
    </div>
);

// Компонент для рендеринга контента внутри модалки
const ModalContent = ({
    project,
    scale,
    onDoubleClick,
    isLoading,
    onImageLoad,
}) => {
    // Если у проекта есть вкладки (tabs) - рендерим их
    if (project.tabs && project.tabs.length > 0) {
        return (
            <div>
                <ScreenshotWarning />
                <TabGroup>
                    <TabList className="flex gap-4 p-2">
                        {project.tabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                className="rounded-full px-3 py-1 text-sm font-semibold text-white/80 transition-colors
                                       focus:outline-none 
                                       data-[hover]:bg-white/20
                                       data-[selected]:bg-white/20 data-[selected]:text-white
                                       data-[focus]:ring-2 data-[focus]:ring-white"
                            >
                                {tab.name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-2">
                        {project.tabs.map((tab) => (
                            <TabPanel key={tab.name}>
                                <ZoomableImage
                                    src={tab.imageUrl}
                                    alt={`Скриншот: ${tab.name}`}
                                    scale={scale}
                                    onDoubleClick={onDoubleClick}
                                    isLoading={isLoading}
                                    onImageLoad={onImageLoad}
                                />
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        );
    }

    // Если вкладок нет, но есть fullImageUrl - рендерим одно изображение
    if (project.fullImageUrl) {
        return (
            <div>
                <ScreenshotWarning />
                <ZoomableImage
                    src={project.fullImageUrl}
                    alt={`Полный скриншот проекта ${project.title}`}
                    scale={scale}
                    onDoubleClick={onDoubleClick}
                    isLoading={isLoading}
                    onImageLoad={onImageLoad}
                />
            </div>
        );
    }

    // Если нет ни того, ни другого, показываем заглушку
    return (
        <p className="text-center text-white/50 p-8">
            Нет изображений для предпросмотра.
        </p>
    );
};

export const ProjectModal = ({ project, onClose }) => {
    const isOpen = Boolean(project);
    const [scale, setScale] = useState(1);

    const closeButtonRef = useRef(null);

    // Cостояние для отслеживания загрузки
    const [isLoading, setIsLoading] = useState(true);

    // Сбрасываем зум при открытии нового проекта
    useEffect(() => {
        if (project) {
            setScale(1);
            setIsLoading(true); // Сбрасываем лоадер для нового проекта
        }
    }, [project]);

    const handleImageLoad = () => setIsLoading(false); // Функция для скрытия лоадера

    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
    const handleZoomOut = () => setScale((prev) => Math.max(1, prev - 0.2));
    const handleDoubleClick = () => setScale(1);

    if (!project) return null;

    return (
        <Transition appear show={isOpen}>
            <Dialog
                as="div"
                className="relative z-50"
                onClose={onClose}
                initialFocus={closeButtonRef} // Указываем начальный фокус
            >
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                </TransitionChild>

                {/* --- Добавляем отступы для кнопки закрытия --- */}
                <div className="fixed inset-0 w-screen overflow-y-auto p-4 md:p-8">
                    <div className="flex min-h-full items-center justify-center">
                        <TransitionChild
                            as="div"
                            className="relative"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <button
                                ref={closeButtonRef} // Привязываем ref к кнопке
                                onClick={onClose}
                                className="absolute -top-4 -right-4 z-20 p-2 rounded-full text-white/50 bg-black/50 hover:text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                                aria-label="Закрыть"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            <DialogPanel className="relative w-full max-w-4xl rounded-xl bg-slate-900/80 border border-white/10 p-4 backdrop-blur-xl overflow-hidden">
                                <div className="max-h-[85vh] overflow-y-auto rounded-lg">
                                    {/* Передаем состояние и функцию в ModalContent */}
                                    <ModalContent
                                        project={project}
                                        scale={scale}
                                        onDoubleClick={handleDoubleClick}
                                        isLoading={isLoading}
                                        onImageLoad={handleImageLoad}
                                    />
                                </div>

                                <div className="absolute bottom-7 right-10 z-20 flex items-center gap-2">
                                    <button
                                        onClick={handleZoomOut}
                                        className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white focus:outline-none"
                                    >
                                        <MagnifyingGlassMinusIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={handleZoomIn}
                                        className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white focus:outline-none"
                                    >
                                        <MagnifyingGlassPlusIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
