import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Политика конфиденциальности | Тамерлан Dev",
    robots: { index: false, follow: false },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen py-24 px-6 md:px-12 max-w-3xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-12"
            >
                <ArrowLeft size={16} /> На главную
            </Link>

            <h1 className="text-3xl md:text-4xl font-medium tracking-tighter mb-8 text-foreground">
                Политика конфиденциальности
            </h1>

            <div className="flex flex-col gap-6 text-sm text-muted leading-relaxed">
                <p>
                    Настоящая Политика конфиденциальности описывает, как
                    собирается, используется и защищается ваша личная информация
                    при использовании сайта <strong>gelgaevdev.ru</strong>.
                </p>

                <h2 className="text-lg font-medium text-foreground mt-4">
                    1. Сбор персональных данных
                </h2>
                <p>
                    При заполнении контактной формы на сайте собираются
                    следующие данные:
                    <br />• Имя
                    <br />• Адрес электронной почты (Email)
                    <br />• Номер телефона (опционально)
                    <br />• Текст сообщения
                </p>

                <h2 className="text-lg font-medium text-foreground mt-4">
                    2. Цели обработки данных
                </h2>
                <p>
                    Собранные данные используются исключительно для:
                    <br />• Установления обратной связи с пользователем.
                    <br />• Обсуждения деталей разработки веб-проектов и
                    предоставления услуг.
                    <br />
                    Ваши данные не используются для спам-рассылок и не продаются
                    третьим лицам.
                </p>

                <h2 className="text-lg font-medium text-foreground mt-4">
                    3. Передача сторонним сервисам
                </h2>
                <p>
                    Для маршрутизации и доставки сообщений из формы обратной
                    связи используется сторонний сервис{" "}
                    <strong>Web3Forms</strong>. Данные передаются по защищенному
                    протоколу (HTTPS) и обрабатываются согласно политике
                    безопасности данного провайдера.
                </p>

                <h2 className="text-lg font-medium text-foreground mt-4">
                    4. Хранение и защита
                </h2>
                <p>
                    Принимаются необходимые технические и организационные меры
                    для защиты вашей персональной информации от неправомерного
                    или случайного доступа, копирования, распространения, а
                    также от иных неправомерных действий.
                </p>

                <h2 className="text-lg font-medium text-foreground mt-4">
                    5. Согласие пользователя
                </h2>
                <p>
                    Нажимая кнопку отправки формы, вы даете свое согласие на
                    обработку персональных данных в соответствии с условиями,
                    изложенными в данном документе.
                </p>

                <h2 className="text-lg font-medium text-foreground mt-4">
                    6. Контакты и отзыв согласия
                </h2>
                <p>
                    Вы имеете право в любой момент запросить информацию о том,
                    какие ваши данные были сохранены, а также потребовать их
                    удаления. Для этого свяжитесь со мной напрямую по контактам
                    (Telegram, почта), указанным на главной странице сайта.
                </p>
            </div>
        </main>
    );
}
