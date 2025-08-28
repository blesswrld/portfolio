"use-client";
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
import { XMarkIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

// Компонент-предупреждение
const ScreenshotWarning = () => (
    <div className="flex items-center gap-2 p-3 text-xs text-amber-300/80 bg-amber-900/20 border border-amber-500/20 rounded-lg my-4">
        <InformationCircleIcon className="w-5 h-5 flex-shrink-0" />
        <span>
            Некоторые анимации или интерактивные элементы могут некорректно
            отображаться на полностраничном скриншоте. Для полного впечатления,
            пожалуйста, посетите демо-версию сайта.
        </span>
    </div>
);

// Компонент для рендеринга контента внутри модалки
const ModalContent = ({ project }) => {
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
                                <img
                                    src={tab.imageUrl}
                                    alt={`Скриншот: ${tab.name}`}
                                    className="w-full h-auto"
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
                <img
                    src={project.fullImageUrl}
                    alt={`Полный скриншот проекта ${project.title}`}
                    className="w-full h-auto"
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
    if (!project) return null;

    return (
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                            className="relative" // <-- Добавляем position-relative
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <button
                                onClick={onClose}
                                className="absolute -top-4 -right-4 z-10 p-2 rounded-full text-white/50 bg-black/50 hover:text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                                aria-label="Закрыть"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            <DialogPanel className="w-full max-w-4xl rounded-xl bg-slate-900/80 border border-white/10 p-4 backdrop-blur-xl">
                                <div className="max-h-[85vh] overflow-y-auto rounded-lg">
                                    <ModalContent project={project} />
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
