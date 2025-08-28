"use client";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, CodeBracketIcon } from "@heroicons/react/24/solid"; // Добавляем иконку
import { motion } from "framer-motion";
import { techStackData } from "../data/techStackData";

// Карта цветов для линий, чтобы они соответствовали категориям
const categoryLineColors = {
    "Frontend (Клиентская часть):": "stroke-sky-500",
    "Backend (Серверная часть):": "stroke-emerald-500",
    "Облачные Сервисы и Хранилище:": "stroke-amber-500",
    "Инструменты Сборки и Утилиты:": "stroke-indigo-500",
};

export const ResumeTab = () => (
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
                            приятные для пользователя продукты. Я всегда открыт
                            для интересных задач и готов вносить свой вклад в
                            проекты, которые меняют мир к лучшему.
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
            <div className="space-y-12">
                {techStackData.map((group) => (
                    <div key={group.category} className="tech-group">
                        {/* SVG Линия и иконка */}
                        <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                            <CodeBracketIcon
                                className={`h-6 w-6 z-10 ${categoryLineColors[
                                    group.category
                                ]?.replace("stroke-", "text-")}`}
                            />
                            <svg height="100%" width="2" className="flex-grow">
                                <motion.line
                                    x1="1"
                                    y1="0"
                                    x2="1"
                                    y2="100%"
                                    className={`${
                                        categoryLineColors[group.category]
                                    }`}
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                />
                            </svg>
                        </div>

                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-white/80 mb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.technologies.map((tech) => (
                                    <motion.span
                                        key={tech.name}
                                        className={`px-3 py-1.5 text-sm font-bold rounded-md shadow-md ${tech.color} transition-transform hover:scale-105`}
                                        whileHover={{ y: -2 }}
                                    >
                                        {tech.name}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);
