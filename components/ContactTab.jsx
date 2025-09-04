"use client";

import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Github, Send } from "lucide-react";

export const ContactTab = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
                Связаться со мной
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
                Есть интересный проект или предложение? Заполните форму ниже, и
                я отвечу вам в ближайшее время.
            </p>
            <ContactForm />
        </div>

        {/* --- БЛОК СО ССЫЛКАМИ --- */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
        >
            <p className="text-white/60 mb-4">
                Или свяжитесь со мной напрямую:
            </p>
            <div className="flex justify-center gap-4">
                <a
                    href="https://t.me/timammn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                >
                    <Button
                        variant="outline"
                        className="flex flex-col justify-center items-center h-28 w-28"
                    >
                        <Send className="mb-2 h-5 w-5" />
                        Telegram
                    </Button>
                </a>
                <a
                    href="https://github.com/blesswrld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-200"
                >
                    <Button
                        variant="outline"
                        className="flex flex-col justify-center items-center h-28 w-28"
                    >
                        <Github className="mb-2 h-5 w-5" />
                        GitHub
                    </Button>
                </a>
            </div>
        </motion.div>
    </motion.div>
);
