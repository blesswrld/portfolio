"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const { t, lang } = useLanguage();
    const formRef = useRef<HTMLFormElement>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
        message?: string;
    }>({});

    const socials = [
        { name: "GitHub", href: "https://github.com/blesswrld" },
        { name: "Kwork", href: "https://kwork.ru/user/tameerlan" },
        { name: "Telegram", href: "https://t.me/tamerlan_webdev" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const form = formRef.current;
        const name = (
            form.elements.namedItem("user_name") as HTMLInputElement
        ).value.trim();
        const email = (
            form.elements.namedItem("user_email") as HTMLInputElement
        ).value.trim();
        const phone = (
            form.elements.namedItem("user_phone") as HTMLInputElement
        ).value.trim();
        const message = (
            form.elements.namedItem("message") as HTMLTextAreaElement
        ).value.trim();

        const newErrors: typeof errors = {};

        if (name.length < 2) {
            newErrors.name =
                lang === "en"
                    ? "Name must be at least 2 characters"
                    : "Имя слишком короткое";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email =
                lang === "en"
                    ? "Please enter a valid email"
                    : "Некорректный формат email";
        }

        if (phone && !/^[\d\+\-\(\)\s]{7,20}$/.test(phone)) {
            newErrors.phone =
                lang === "en"
                    ? "Invalid phone format"
                    : "Некорректный формат телефона";
        }

        if (message.length < 10) {
            newErrors.message =
                lang === "en"
                    ? "Message must be at least 10 characters"
                    : "Сообщение слишком короткое (мин. 10 символов)";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);
        setStatus("idle");

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
            );

            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" className="py-20 border-t border-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-6">
                        {t.contact.title1} <br />
                        <span className="text-muted">{t.contact.title2}</span>
                    </h2>
                    <p className="text-muted max-w-sm mb-12">
                        {t.contact.desc}
                    </p>

                    <div className="flex gap-6 text-sm font-medium">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative py-1 group overflow-hidden"
                                data-interactive
                            >
                                <span className="group-hover:text-accent transition-colors duration-300">
                                    {social.name}
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                            </a>
                        ))}
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-8"
                    noValidate
                >
                    <div className="flex flex-col gap-2 relative group">
                        <label className="text-xs font-mono text-muted uppercase">
                            {t.contact.form.name}{" "}
                            <span className="text-red-500/50">*</span>
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            disabled={isSubmitting}
                            className={`bg-transparent border-b py-3 outline-none transition-colors text-foreground w-full disabled:opacity-50 ${errors.name ? "border-red-500/50 focus:border-red-500" : "border-neutral-800 focus:border-foreground"}`}
                        />
                        {errors.name && (
                            <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 relative group">
                        <label className="text-xs font-mono text-muted uppercase">
                            {lang === "en"
                                ? "Phone (Optional)"
                                : "Телефон (Необязательно)"}
                        </label>
                        <input
                            type="tel"
                            name="user_phone"
                            disabled={isSubmitting}
                            className={`bg-transparent border-b py-3 outline-none transition-colors text-foreground w-full disabled:opacity-50 ${errors.phone ? "border-red-500/50 focus:border-red-500" : "border-neutral-800 focus:border-foreground"}`}
                        />
                        {errors.phone && (
                            <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">
                                {errors.phone}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 relative group">
                        <label className="text-xs font-mono text-muted uppercase">
                            {t.contact.form.email}{" "}
                            <span className="text-red-500/50">*</span>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            disabled={isSubmitting}
                            className={`bg-transparent border-b py-3 outline-none transition-colors text-foreground w-full disabled:opacity-50 ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-neutral-800 focus:border-foreground"}`}
                        />
                        {errors.email && (
                            <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 relative group">
                        <label className="text-xs font-mono text-muted uppercase">
                            {t.contact.form.message}{" "}
                            <span className="text-red-500/50">*</span>
                        </label>
                        <textarea
                            rows={4}
                            name="message"
                            disabled={isSubmitting}
                            className={`bg-transparent border-b py-3 outline-none transition-colors text-foreground w-full resize-none disabled:opacity-50 ${errors.message ? "border-red-500/50 focus:border-red-500" : "border-neutral-800 focus:border-foreground"}`}
                        />
                        {errors.message && (
                            <span className="absolute -bottom-5 left-0 text-[10px] text-red-500">
                                {errors.message}
                            </span>
                        )}
                    </div>

                    <div className="mt-4 self-start">
                        <Magnetic>
                            <button
                                type="submit"
                                disabled={isSubmitting || status === "success"}
                                className={`flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 select-none
                                    ${
                                        status === "success"
                                            ? "bg-green-600 text-white"
                                            : status === "error"
                                              ? "bg-red-600 text-white"
                                              : "bg-foreground text-background hover:scale-105"
                                    } disabled:opacity-80 disabled:hover:scale-100`}
                                data-interactive
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2
                                            size={16}
                                            className="animate-spin"
                                        />{" "}
                                        {lang === "en"
                                            ? "Sending..."
                                            : "Отправка..."}
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle2 size={16} />{" "}
                                        {lang === "en"
                                            ? "Sent!"
                                            : "Отправлено!"}
                                    </>
                                ) : status === "error" ? (
                                    <>
                                        {lang === "en"
                                            ? "Error, try again"
                                            : "Ошибка, еще раз"}
                                    </>
                                ) : (
                                    <>
                                        {t.contact.form.btn}{" "}
                                        <ArrowUpRight size={16} />
                                    </>
                                )}
                            </button>
                        </Magnetic>
                    </div>
                </form>
            </div>
        </section>
    );
};
