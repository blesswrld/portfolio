"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button } from "./ui/Button";

export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            alert("Сообщение успешно отправлено!");
            reset();
        } catch (error) {
            console.error("ОШИБКА EmailJS:", error);
            alert("Что-то пошло не так.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 text-left max-w-lg mx-auto"
        >
            <div>
                <input
                    placeholder="Ваше имя"
                    {...register("name", {
                        required: "Имя обязательно для заполнения",
                    })}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/50 outline-none transition-all backdrop-blur-md"
                />
                {errors.name && (
                    <p className="text-red-400 text-sm mt-2">
                        {errors.name.message}
                    </p>
                )}
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Ваш Email"
                    {...register("email", {
                        required: "Email обязателен",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Неверный формат email",
                        },
                    })}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/50 outline-none transition-all backdrop-blur-md"
                />
                {errors.email && (
                    <p className="text-red-400 text-sm mt-2">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div>
                <textarea
                    placeholder="Ваше сообщение"
                    rows={5}
                    {...register("message", {
                        required: "Сообщение не может быть пустым",
                    })}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/50 outline-none transition-all backdrop-blur-md"
                />
                {errors.message && (
                    <p className="text-red-400 text-sm mt-2">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить сообщение"}
            </Button>
        </form>
    );
}
