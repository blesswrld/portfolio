import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://gelgaevdev.ru"),
    title: {
        default: "Тамерлан | Frontend-разработчик и UI-дизайнер",
        template: "%s | Тамерлан Dev",
    },
    description:
        "Профессиональная разработка Landing Page, интернет-магазинов и веб-приложений. 100% результат, современные технологии React/Next.js.",
    keywords: [
        "Frontend разработчик",
        "Создание сайтов",
        "Разработка лендингов",
        "Веб-разработка Россия",
        "Фриланс разработка",
    ],
    openGraph: {
        title: "Тамерлан | Frontend-разработчик",
        description: "Разработка современных и быстрых веб-интерфейсов.",
        url: "https://gelgaevdev.ru",
        siteName: "Tamerлан Dev",
        locale: "ru_RU",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            {
                url: "/favicon/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
        shortcut: "/favicon/favicon.ico",
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
    manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Тамерлан",
                            jobTitle: "Frontend Developer",
                            url: "https://gelgaevdev.ru",
                            sameAs: [
                                "https://github.com/blesswrld",
                                "https://kwork.ru/user/tameerlan",
                            ],
                        }),
                    }}
                />
            </head>
            <body className={`${geist.variable} font-sans antialiased`}>
                <LanguageProvider>
                    <div className="noise-overlay"></div>
                    <CustomCursor />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
