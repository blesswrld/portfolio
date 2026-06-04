"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ru";

const translations = {
    en: {
        nav: {
            projects: "Projects",
            pricing: "Services",
            about: "About",
            contact: "Contact",
        },
        hero: {
            badge: "Available for new opportunities",
            title1: "Frontend Developer",
            title2: "& UI Designer",
            desc: "Hi, I'm Tamerlan, an 18-year-old developer based in Russia. I craft digital experiences that are visually striking and highly interactive. Focused on performance, clean architecture, and fluid animations.",
            btn: "Explore Work",
        },
        projects: {
            title: "Selected Works",
            categories: {
                promo: "Promo Landing",
                creative: "Creative Dev",
                corp: "Corporate",
                app: "Web App",
                ai: "AI SaaS",
            },
            items: {
                p1: "iPhone 15 Pro Clone",
                p2: "Velvet Pour: Mojito",
                p3: "Brainwave AI Platform",
                p4: "CodeSync Platform",
            },
        },
        pricing: {
            title: "Services & Pricing",
            disclaimer: "* Prices are approximate and discussed individually.",
            btn: "Discuss your project",
            services: [
                {
                    title: "Landing Page Development",
                    desc: "Creating stylish, fast, and responsive single-page websites. Developed using React, pure JS/HTML/CSS for effective client conversion.",
                    price: "from 3 000 ₽*",
                },
                {
                    title: "Multi-page Website / Shop",
                    desc: "Development of responsive multi-page sites and online stores. I provide SEO optimization, user-friendly navigation, and premium layout.",
                    price: "from 9 000 ₽*",
                },
                {
                    title: "Web Application Development",
                    desc: "Development of complex interactive web applications: CRM, client dashboards, SaaS platforms. Custom React/Redux architectures.",
                    price: "from 12 000 ₽*",
                },
                {
                    title: "Layout from Figma/Sketch",
                    desc: "Accurate, responsive, and cross-browser markup of your layouts from Figma, PSD, or Sketch. Pure HTML/CSS/JS or React components.",
                    price: "from 4 000 ₽*",
                },
                {
                    title: "Project Refinement & Support",
                    desc: "Making edits, adding new features, and fixing bugs in existing frontend projects. Working primarily with React/JS stack.",
                    price: "from 1 000 ₽/hour*",
                },
                {
                    title: "Frontend Optimization",
                    desc: "Comprehensive improvement of website loading speed, code optimization, and asset compression. Enhancing performance for better UX and SEO.",
                    price: "from 1 500 ₽*",
                },
            ],
        },
        experience: {
            title: "Experience",
            jobs: [
                {
                    id: "01",
                    role: "Frontend Freelance Developer",
                    company: "Self-employed",
                    period: "2025 — 2026",
                    description:
                        "Developed and deployed responsive landing pages, creative promotional sites, and interactive web applications for local and international clients. Full-cycle development from Figma layouts to animations and production deployment.",
                    skills: [
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                        "GSAP",
                        "Vite",
                    ],
                },
            ],
            kworkStats: {
                title: "Top Rated Seller",
                platform: "Kwork",
                rating: "5.0",
                orders: "100% success rate & on-time delivery",
            },
        },
        contact: {
            title1: "Let's build",
            title2: "something great.",
            desc: "Looking for a developer for your team or want to discuss a freelance project? Drop me a line, I'm always open to new opportunities.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                btn: "Send Message",
            },
        },
    },
    ru: {
        nav: {
            projects: "Проекты",
            pricing: "Услуги",
            about: "Обо мне",
            contact: "Контакты",
        },
        hero: {
            badge: "Открыт к новым предложениям",
            title1: "Frontend-разработчик",
            title2: "& UI-дизайнер",
            desc: "Привет, меня зовут Тамерлан, мне 18 лет, я из России. Создаю цифровые продукты, которые впечатляют визуально и работают безупречно. Фокус на производительности, чистой архитектуре и плавных анимациях.",
            btn: "Смотреть работы",
        },
        projects: {
            title: "Избранные работы",
            categories: {
                promo: "Промо-лендинг",
                creative: "Креативная верстка",
                corp: "Corporate",
                app: "Веб-приложение",
                ai: "AI-платформа",
            },
            items: {
                p1: "Клон iPhone 15 Pro",
                p2: "Промо Velvet Pour",
                p3: "Платформа Brainwave",
                p4: "Платформа CodeSync",
            },
        },
        pricing: {
            title: "Услуги и прайс-лист",
            disclaimer:
                "* Указанные цены являются ориентировочными и обсуждаются индивидуально.",
            btn: "Обсудить ваш проект",
            services: [
                {
                    title: "Разработка Landing Page\n(одностраничный сайт)",
                    desc: "Создание стильных, быстрых и адаптивных одностраничных сайтов. Разработка на React, чистом JS/HTML/CSS для эффективного привлечения клиентов.",
                    price: "от 3 000 ₽*",
                },
                {
                    title: "Многостраничный сайт /\nинтернет-магазин",
                    desc: "Разработка адаптивных многостраничных сайтов и интернет-магазинов. Обеспечу SEO-оптимизацию, удобную навигацию и эффективное представление ваших услуг/товаров.",
                    price: "от 9 000 ₽*",
                },
                {
                    title: "Разработка веб-\nприложений",
                    desc: "Разработка сложных интерактивных веб-приложений: CRM, личных кабинетов, SaaS-платформ. Создание кастомных решений на React/Redux для автоматизации процессов и высокой производительности.",
                    price: "от 12 000 ₽*",
                },
                {
                    title: "Верстка по макету (Figma)",
                    desc: "Точная, адаптивная и кроссбраузерная верстка ваших макетов из Figma, PSD или Sketch. Реализация в чистом HTML/CSS/JS или в виде React-компонентов.",
                    price: "от 4 000 ₽*",
                },
                {
                    title: "Доработка и поддержка проектов",
                    desc: "Внесение правок, добавление нового функционала и исправление багов для существующих фронтенд-проектов. Работаю преимущественно с React/JS-базой.",
                    price: "от 1 000 ₽/час*",
                },
                {
                    title: "Frontend Оптимизация",
                    desc: "Комплексное улучшение скорости загрузки сайта, оптимизация кода и ресурсов. Повышение производительности для лучшего пользовательского опыта и SEO-результатов.",
                    price: "от 1 500 ₽*",
                },
            ],
        },
        experience: {
            title: "Опыт работы",
            jobs: [
                {
                    id: "01",
                    role: "Frontend-разработчик (Фриланс)",
                    company: "Самозанятость",
                    period: "2025 — 2026",
                    description:
                        "Разработка и успешный деплой адаптивных лендингов под ключ, веб-приложений и креативных промо-сайтов. Полный цикл работы с клиентами: от разбора Figma-макетов до комплексной настройки анимаций, интеграции API и оптимизации производительности.",
                    skills: [
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                        "GSAP",
                        "Vite",
                    ],
                },
            ],
            kworkStats: {
                title: "Топ-продавец",
                platform: "Kwork",
                rating: "5.0",
                orders: "100% заказов сдано вовремя",
            },
        },
        contact: {
            title1: "Давай создадим",
            title2: "что-то крутое.",
            desc: "Ищете разработчика в команду или хотите обсудить проект на фриланс? Пишите, я всегда открыт к предложениям.",
            form: {
                name: "Имя",
                email: "Email",
                message: "Сообщение",
                btn: "Отправить сообщение",
            },
        },
    },
};

type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export const LanguageProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [lang, setLang] = useState<Language>("ru");

    return (
        <LanguageContext.Provider
            value={{ lang, setLang, t: translations[lang] }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
