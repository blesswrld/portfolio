export const projectsData = [
    {
        id: 1, // Добавил ID для уникального ключа в React
        title: "Irvas (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету из Figma. Реализована интерактивность с помощью JavaScript, включая модальные окна, формы, слайдер и калькулятор для подбора окон. Стилизация выполнена с использованием CSS.",
        imageUrl: "/images/projects/irvas-project.jpg",
        fullImageUrl: "/images/projects/full/irvas-project-full.jpg",
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://irvas-project.vercel.app",
        repoUrl: "https://github.com/blesswrld/irvas-project",
    },
    {
        id: 2,
        title: "Loan (Лендинг)",
        description:
            "Адаптивный многостраничный сайт, сверстанный по макету Figma. Стилизация реализована с использованием Sass. JavaScript применен для создания интерактивных элементов. Интегрирован YouTube API для динамической подгрузки видео.",
        imageUrl: "/images/projects/loan-project.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/loan-project-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/loan-project-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl: "/images/projects/tabs/loan-project-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl: "/images/projects/tabs/loan-project-full-tab-4.jpg",
            },
            {
                name: "5",
                imageUrl: "/images/projects/tabs/loan-project-full-tab-5.jpg",
            },
            {
                name: "6",
                imageUrl: "/images/projects/tabs/loan-project-full-tab-6.jpg",
            },
        ],
        tech: ["HTML", "Sass", "JavaScript", "API Integration"],
        liveUrl: "https://loan-project-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/loan-project",
    },
    {
        id: 3,
        title: "Food (Лендинг)",
        description:
            "Адаптивный лендинг по макету Figma. С помощью JavaScript реализованы интерактивные элементы: модальные окна и формы. Настроен JSON Server для динамической подгрузки данных и имитации отправки форм.",

        imageUrl: "/images/projects/food-project.jpg",
        fullImageUrl: "/images/projects/full/food-project-full.jpg",
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://food-project-amber-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/food-project",
    },
    {
        id: 4,
        title: "Rest Countries (Веб-приложение)",
        description:
            "Веб-приложение на React для исследования стран мира через Rest Countries API. Позволяет переключать темы, просматривать список стран, фильтровать их по названию или региону и изучать подробную информацию о выбранной стране.",
        imageUrl: "/images/projects/rest-countries-api.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/rest-countries-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/rest-countries-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl: "/images/projects/tabs/rest-countries-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl: "/images/projects/tabs/rest-countries-full-tab-4.jpg",
            },
        ],
        tech: ["React", "JS (Hooks)", "API Integration", "Styled Components"],
        liveUrl: "https://rest-countries-api-ten-xi.vercel.app",
        repoUrl: "https://github.com/blesswrld/REST-Countries-Api",
    },
    {
        id: 5,
        title: "Filmix (Веб-приложение)",
        description:
            "Веб-приложение для поиска информации о фильмах и сериалах. Использует Kinopoisk API для получения актуальных данных: списки популярных фильмов, постеры, описания и рейтинги. Позволяет пользователям удобно навигироваться по каталогу.",
        imageUrl: "/images/projects/filmix-project.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/filmix-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/filmix-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl: "/images/projects/tabs/filmix-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl: "/images/projects/tabs/filmix-full-tab-4.jpg",
            },
        ],
        tech: ["React", "JavaScript", "API Integration", "MUI", "Vite", "Sass"],
        liveUrl: "https://filmix-react.vercel.app",
        repoUrl: "https://github.com/blesswrld/filmix-react",
    },
    {
        id: 6,
        title: "CodeSync (Платформа для созвонов)",
        description:
            "Платформа для видеоконференций на Next.js. Реализованы групповые звонки с помощью Stream.io и аутентификация через Clerk. Интерфейс построен на Shadcn UI и Tailwind CSS. В качестве базы данных используется Convex.",
        imageUrl: "/images/projects/codesync-platform.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/codesync-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/codesync-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl: "/images/projects/tabs/codesync-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl: "/images/projects/tabs/codesync-full-tab-4.jpg",
            },
            {
                name: "5",
                imageUrl: "/images/projects/tabs/codesync-full-tab-5.jpg",
            },
            {
                name: "6",
                imageUrl: "/images/projects/tabs/codesync-full-tab-6.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Stream.io",
            "Clerk",
            "Convex",
            "Tailwind CSS",
            "Shadcn UI",
        ],
        liveUrl: "https://codesync-react-platform.vercel.app",
        repoUrl: "https://github.com/blesswrld/CodeSync-react-platform",
    },
    {
        id: 7,
        title: "PingMe (Мессенджер)",
        description:
            "Веб-мессенджер на React с обменом сообщениями в реальном времени через Socket.io. Для хранения файлов интегрировано облачное хранилище Yandex.Cloud. В качестве базы данных используется MongoDB. Стилизация на Tailwind CSS.",
        imageUrl: "/images/projects/pingme-messanger.jpg",
        inDevelopment: true, // <-- ДОБАВЛЯЕМ СТАТУС "В РАЗРАБОТКЕ"
        tech: [
            "React",
            "JavaScript",
            "Socket.io",
            "MongoDB",
            "Zustand",
            "Yandex.Cloud",
            "Tailwind CSS",
            "Vite",
        ],
        liveUrl: "#",
        repoUrl: "https://github.com/blesswrld/PingMe-react-messanger",
    },
    {
        id: 8,
        title: "Ceramic Soul (Многостраничный сайт)",
        description:
            "Адаптивный сайт для студии керамики, разработанный для демонстрации и продажи изделий. Сверстан по макету из Figma, стилизация выполнена с использованием Sass. JavaScript применен для интерактивных элементов. Проект собран с помощью Vite.",
        imageUrl: "/images/projects/ceramic-soul.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/ceramic-soul-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/ceramic-soul-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl: "/images/projects/tabs/ceramic-soul-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl: "/images/projects/tabs/ceramic-soul-full-tab-4.jpg",
            },
        ],
        tech: ["HTML", "Sass", "JavaScript", "Vite"],
        liveUrl: "https://ceramic-soul.vercel.app",
        repoUrl: "https://github.com/blesswrld/ceramic-soul",
    },
    {
        id: 9,
        title: "Mojito (Анимированный лендинг)",
        description:
            "Элегантный и динамичный лендинг для коктейльного бара с акцентом на премиальный визуал. Использована библиотека GSAP для создания сложных и производительных анимационных эффектов, включая параллакс и анимированное появление элементов.",
        imageUrl: "/images/projects/gsap-mojito.jpg",
        fullImageUrl: "/images/projects/full/gsap-mojito-full.jpg",
        tech: ["React", "GSAP", "TailwindCSS", "Vite"],
        liveUrl: "https://gsap-mojito-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/gsap-mojito",
    },
    {
        id: 10,
        title: "Apple iPhone (Анимированный лендинг)",
        description:
            "Интерактивный лендинг, воссоздающий продуктовую страницу Apple. Реализован с помощью React Three Fiber для отображения и управления 3D-моделью iPhone. Для всех анимаций, включая скролл-триггеры и синхронизированный видео-карусель, использована библиотека GSAP.",
        imageUrl: "/images/projects/apple-iphone.jpg",
        fullImageUrl: "/images/projects/full/apple-iphone-full.jpg",
        tech: [
            "React",
            "GSAP",
            "Three.js",
            "React Three Fiber",
            "TailwindCSS",
            "Vite",
        ],
        liveUrl: "https://apple-iphone-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/apple-iphone",
    },
    {
        id: 11,
        title: "Brainwave (SaaS Лендинг)",
        description:
            "Современный и полностью адаптивный лендинг для SaaS-платформы с использованием React и Vite. Проект демонстрирует сложные CSS-техники и кастомные решения на TailwindCSS, включая продвинутые градиенты, SVG-анимации и параллакс-эффекты.",
        imageUrl: "/images/projects/brainwave.jpg",
        fullImageUrl: "/images/projects/full/brainwave-full.jpg",
        tech: ["React", "React Router", "TailwindCSS", "Vite"],
        liveUrl: "https://brainwave-sooty-ten.vercel.app",
        repoUrl: "https://github.com/blesswrld/brainwave",
    },
    {
        id: 12,
        title: "FlowState (Канбан-доска)",
        description:
            "Интерактивный Канбан-менеджер на Next.js с чистой архитектурой на кастомных хуках. Реализован drag-and-drop задач с помощью dnd-kit, создание, удаление, поиск и фильтрация. Состояние сохраняется в localStorage. Для улучшения UX встроены toast-уведомления и анимация конфетти.",
        imageUrl: "/images/projects/flowstate-kanban.jpg",
        fullImageUrl: "/images/projects/full/flowstate-kanban-full.jpg",
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "dnd-kit",
            "Tailwind CSS",
            "Shadcn UI",
            "Sonner (Toasts)",
            "lucide-react",
        ],
        liveUrl: "https://flowstate-kanban.vercel.app",
        repoUrl: "https://github.com/blesswrld/flowstate-kanban",
    },
    {
        id: 13,
        title: "Momentum (Трекер привычек)",
        description:
            "Минималистичный трекер привычек на Next.js. Позволяет добавлять кастомные привычки с периодом до года, отслеживать прогресс в интерактивной сетке и видеть счетчик оставшихся дней. Реализован поиск и сохранение в localStorage. UX улучшен за счет toast-уведомлений и анимации конфетти.",
        imageUrl: "/images/projects/momentum-tracker.jpg",
        tabs: [
            {
                name: "1",
                imageUrl:
                    "/images/projects/tabs/momentum-tracker-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl:
                    "/images/projects/tabs/momentum-tracker-full-tab-2.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Sonner (Toasts)",
            "react-confetti",
            "lucide-react",
        ],
        liveUrl: "https://momentum-tracker-lyart.vercel.app",
        repoUrl: "https://github.com/blesswrld/momentum-tracker",
    },
    {
        id: 14,
        title: "ChromaGen (AI-генератор палитр)",
        description:
            "Веб-приложение на Next.js для генерации цветовых палитр с помощью AI. Пользователь может создавать палитры по текстовому описанию, используя разные AI-модели (Groq, Hugging Face), или извлекать доминирующие цвета из загруженного изображения.",
        imageUrl: "/images/projects/chromagen-ai.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/chromagen-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/chromagen-full-tab-2.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "Geist UI",
            "Tailwind CSS",
            "Framer Motion",
            "colorthief",
            "lucide-react",
            "react-hot-toast",
        ],
        liveUrl: "https://chromagen-ai.vercel.app",
        repoUrl: "https://github.com/blesswrld/chromagen-AI",
    },
    {
        id: 15,
        title: "Интерактивная Git Шпаргалка",
        description:
            "Веб-приложение на Next.js, представляющее собой умный справочник по командам Git. Реализован динамический поиск, фильтрация по категориям, интерактивные конструкторы команд и анимированные SVG-визуализации для сложных операций.",
        imageUrl: "/images/projects/git-cheatsheet.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/git-cheatsheet-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/git-cheatsheet-full-tab-2.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React",
            "Headless UI",
            "Tailwind CSS",
            "Framer Motion",
        ],
        liveUrl: "https://git-cheatsheet.vercel.app/",
        repoUrl: "https://github.com/blesswrld/git-cheatsheet-app",
    },
    {
        id: 16,
        title: "PearDrop (P2P Файлообменник)",
        description:
            "Веб-приложение для прямой P2P-передачи файлов между двумя браузерами с использованием технологии WebRTC. Реализовано на Vite + React и PeerJS, что обеспечивает безопасный обмен данными без промежуточного сервера.",
        imageUrl: "/images/projects/pear-drop.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/pear-drop-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/pear-drop-full-tab-2.jpg",
            },
        ],
        tech: [
            "React",
            "TypeScript",
            "Vite",
            "PeerJS",
            "WebRTC",
            "NextUI",
            "Tailwind CSS",
        ],
        liveUrl: "https://pear-drop.vercel.app",
        repoUrl: "https://github.com/blesswrld/pear-drop",
    },
    {
        id: 17,
        title: "Nextman (API Клиент)",
        description:
            "Полнофункциональный веб-клиент для работы с API, разработанный на Next.js как аналог Postman. Приложение поддерживает создание и управление коллекциями, историю запросов, динамические окружения с переменными и аутентификацию через GitHub и Google. Одной из ключевых фич является возможность делиться запросами с ответами через уникальные публичные ссылки. Состояние приложения управляется с помощью Zustand, а для хранения данных используется Supabase.",
        imageUrl: "/images/projects/nextman-api.jpg",
        tabs: [
            {
                name: "1",
                imageUrl: "/images/projects/tabs/nextman-api-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl: "/images/projects/tabs/nextman-api-full-tab-2.jpg",
            },

            {
                name: "3",
                imageUrl: "/images/projects/tabs/nextman-api-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl: "/images/projects/tabs/nextman-api-full-tab-4.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "Supabase",
            "Zustand",
            "Tailwind CSS",
            "Shadcn UI",
            "i18next",
            "Framer Motion",
        ],
        liveUrl: "https://nextman-api.vercel.app",
        repoUrl: "https://github.com/blesswrld/nextman-api",
    },
    {
        id: 18,
        title: "Webhook Listener (Инструмент для разработчиков)",
        description:
            "Полнофункциональный инструмент для разработчиков, созданный для захвата, отладки и анализа вебхуков в реальном времени. Реализован на Next.js с использованием Supabase для аутентификации и хранения данных. Пользователи могут создавать уникальные эндпоинты, задавать кастомные пути и мгновенно просматривать детали входящих запросов (тело, заголовки, параметры).",
        imageUrl: "/images/projects/webhook-listener.jpg",
        tabs: [
            {
                name: "1",
                imageUrl:
                    "/images/projects/tabs/webhook-listener-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl:
                    "/images/projects/tabs/webhook-listener-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl:
                    "/images/projects/tabs/webhook-listener-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl:
                    "/images/projects/tabs/webhook-listener-full-tab-4.jpg",
            },
            {
                name: "5",
                imageUrl:
                    "/images/projects/tabs/webhook-listener-full-tab-5.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
            "Shadcn UI",
            "Sonner (Toasts)",
            "lucide-react",
        ],
        liveUrl: "https://webhook-listener-delta.vercel.app",
        repoUrl: "https://github.com/blesswrld/webhook-listener",
    },
    {
        id: 19,
        title: "GitHub Profile Analyzer (Аналитический дашборд)",
        description:
            "Полнофункциональное веб-приложение на Next.js для глубокого анализа профилей GitHub. Генерирует интерактивные дашборды со статистикой по языкам, репозиториям и активности пользователя. Реализована аутентификация через Supabase, динамическая смена тем, адаптивная верстка и возможность сравнения двух профилей.",
        imageUrl: "/images/projects/github-analyzer.jpg",
        tabs: [
            {
                name: "1",
                imageUrl:
                    "/images/projects/tabs/github-analyzer-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl:
                    "/images/projects/tabs/github-analyzer-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl:
                    "/images/projects/tabs/github-analyzer-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl:
                    "/images/projects/tabs/github-analyzer-full-tab-4.jpg",
            },
            {
                name: "5",
                imageUrl:
                    "/images/projects/tabs/github-analyzer-full-tab-5.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
            "Shadcn UI",
            "Nivo (Charts)",
            "Framer Motion",
            "TanStack Query",
            "Lucide React",
            "Sonner (Toasts)",
        ],
        liveUrl: "https://github-analyzer-self.vercel.app",
        repoUrl: "https://github.com/blesswrld/github-analyzer",
    },
    {
        id: 20,
        title: "Currency Converter (Конвертер валют)",
        description:
            "Многостраничный финансовый дашборд на Next.js. Включает в себя конвертер валют с интерактивным графиком истории курса, таблицу актуальных курсов с выбором базовой валюты и трекер популярных криптовалют. Для мгновенной загрузки данных используются серверные компоненты Next.js. Пользовательский интерфейс построен на Tailwind CSS и Radix UI для максимальной доступности и кастомизации. Состояние выбора валют сохраняется в localStorage.",
        imageUrl: "/images/projects/currency-converter.jpg",
        tabs: [
            {
                name: "1",
                imageUrl:
                    "/images/projects/tabs/currency-converter-full-tab-1.jpg",
            },
            {
                name: "2",
                imageUrl:
                    "/images/projects/tabs/currency-converter-full-tab-2.jpg",
            },
            {
                name: "3",
                imageUrl:
                    "/images/projects/tabs/currency-converter-full-tab-3.jpg",
            },
            {
                name: "4",
                imageUrl:
                    "/images/projects/tabs/currency-converter-full-tab-4.jpg",
            },
        ],
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "Tailwind CSS",
            "Radix UI",
            "Recharts",
            "Framer Motion",
            "Sonner (Toasts)",
        ],
        liveUrl: "https://currency-converter-chi-seven-84.vercel.app",
        repoUrl: "https://github.com/blesswrld/currency-converter",
    },
];
