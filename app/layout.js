import "./globals.css";

const siteUrl = new URL("https://www.gelgaevdev.ru");

export const metadata = {
    metadataBase: siteUrl,
    title: {
        default: "Тамерлан Гельгаев | Frontend Разработчик",
        template: "%s | Тамерлан Гельгаев",
    },
    description:
        "Портфолио frontend-разработчика из Грозного. Создаю быстрые, адаптивные и красивые веб-приложения с фокусом на React и Next.js.",
    keywords: [
        "frontend-разработчик",
        "веб-разработчик",
        "портфолио",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Тамерлан Гельгаев",
    ],
    authors: [
        { name: "Тамерлан Гельгаев", url: "https://github.com/blesswrld" },
    ],
    openGraph: {
        title: "Тамерлан Гельгаев - Frontend-разработчик | Портфолио",
        description:
            "Портфолио frontend-разработчика. Проекты, навыки и контакты для связи.",
        url: siteUrl,
        siteName: "Портфолио Тамерлана Гельгаева",
        images: [
            {
                url: "/preview-image.jpg",
                width: 1200,
                height: 630,
                alt: "Превью портфолио Гельгаева Тамерлана",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Тамерлан Гельгаев - Frontend-разработчик | Портфолио",
        description:
            "Портфолио frontend-разработчика. Проекты, навыки и контакты для связи.",
        images: ["/preview-image.jpg"],
    },
    // Далее иконки и манифест
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
