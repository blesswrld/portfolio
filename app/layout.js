import "./globals.css";
import { Toaster } from "react-hot-toast";

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
    icons: {
        icon: [
            {
                url: "/favicon/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
        ],
        apple: [
            { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
            { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
            { url: "/favicon/apple-icon-72x72.png", sizes: "72x72" },
            { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
            { url: "/favicon/apple-icon-114x114.png", sizes: "114x114" },
            { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
            { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
            { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
            { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
        ],
    },
    manifest: "/favicon/manifest.json",
    other: {
        "msapplication-TileColor": "#000000",
        "msapplication-TileImage": "/favicon/ms-icon-144x144.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                <div className="aurora-background"></div>

                {children}

                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: "#1E293B",
                            color: "#E2E8F0",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                        },
                        success: {
                            iconTheme: {
                                primary: "#34D399",
                                secondary: "#1E293B",
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: "#F87171",
                                secondary: "#1E293B",
                            },
                        },
                    }}
                />
            </body>
        </html>
    );
}
