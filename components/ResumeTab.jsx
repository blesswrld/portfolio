"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { techStackData } from "../data/techStackData";
import { Button } from "./ui/Button";
import toast from "react-hot-toast";

// Карта HEX-цветов для линий
const categoryLineColors = {
    "Frontend (Клиентская часть):": "#0ea5e9", // sky-500
    "Backend (Серверная часть):": "#10b981", // emerald-500
    "Облачные Сервисы и Хранилище:": "#f59e0b", // amber-500
    "Инструменты Сборки и Утилиты:": "#6366f1", // indigo-500
};

// Компонент бейджа
const TechBadge = ({ name, bgColor, logoColor, logo }) => (
    <span
        style={{ backgroundColor: bgColor, color: logoColor }}
        className="flex items-center gap-2 px-2.5 py-1 rounded text-sm font-bold transition-transform hover:scale-105 cursor-pointer"
        title={name} // Добавляем title для подсказки при наведении
    >
        {logo && (
            <img
                src={`https://cdn.simpleicons.org/${logo}/${logoColor.replace(
                    "#",
                    ""
                )}`}
                alt={`${name} logo`}
                className="h-4 w-4"
            />
        )}
        {name}
    </span>
);

export const ResumeTab = () => {
    // --- ДОБАВЛЯЕМ ФУНКЦИЮ КОПИРОВАНИЯ EMAIL ---
    const handleCopyEmail = () => {
        const email = "gelgaev.dev@mail.ru";
        navigator.clipboard
            .writeText(email)
            .then(() => {
                toast.success("Email скопирован в буфер обмена!");
            })
            .catch((err) => {
                toast.error("Не удалось скопировать Email.");
                console.error("Ошибка копирования:", err);
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                    Привет! Меня зовут Тамерлан, и я живу в городе Грозный. Мне
                    нравится превращать идеи в живые, интерактивные интерфейсы.
                    Особое внимание я уделяю чистоте кода, адаптивности и
                    производительности веб-приложений.
                </p>
            </div>

            {/* --- ДОБАВЛЯЕМ БЛОК С КНОПКОЙ --- */}
            <div className="flex justify-center mt-8">
                <Button
                    variant="secondary"
                    className="w-full sm:w-auto"
                    onClick={handleCopyEmail}
                >
                    Копировать Email
                </Button>
            </div>

            <div className="mx-auto w-full mt-8 divide-y divide-white/5 rounded-xl bg-white/5">
                <Disclosure as="div" className="p-6" defaultOpen={true}>
                    {(
                        { open } // <-- Используем render prop для доступа к состоянию "open"
                    ) => (
                        <>
                            <DisclosureButton className="group flex w-full items-center justify-between">
                                <span className="text-sm font-medium text-white group-hover:text-white/80">
                                    Моя цель
                                </span>
                                <ChevronDownIcon
                                    className={`w-5 h-5 fill-white/60 group-hover:fill-white/50 transition-transform duration-300 ease-in-out ${
                                        open ? "rotate-180" : "" // <-- Управляем вращением через состояние
                                    }`}
                                />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 text-sm text-white/50">
                                Создавать не просто работающие, но и удобные,
                                приятные для пользователя продукты. Я всегда
                                открыт для интересных задач и готов вносить свой
                                вклад в проекты, которые меняют мир к лучшему.
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            </div>

            {/* --- БЛОК: СТЕК ТЕХНОЛОГИЙ --- */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">
                    Стек Технологий и Инструменты
                </h2>
                <div className="space-y-8">
                    {techStackData.map((group) => (
                        <div
                            key={group.category}
                            className="tech-group-container"
                            // Задаем цвет линии через CSS-переменную
                            style={{
                                "--line-color":
                                    categoryLineColors[group.category],
                            }}
                        >
                            {/* Абсолютно спозиционированная иконка */}
                            <div className="absolute left-0 top-0">
                                <CodeBracketIcon
                                    className="h-6 w-6"
                                    style={{
                                        color: categoryLineColors[
                                            group.category
                                        ],
                                    }}
                                />
                            </div>

                            {/* Контент */}
                            <div>
                                <h3 className="text-xl font-semibold text-white/80">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {group.technologies.map((tech) => (
                                        <TechBadge key={tech.name} {...tech} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
