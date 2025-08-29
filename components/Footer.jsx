"use client";

import { useState } from "react";
import { Github, Send } from "lucide-react";
import { PrivacyModal } from "./PrivacyModal";

export const Footer = () => {
    const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="w-full mt-24">
                <div className="container mx-auto max-w-5xl py-8 px-4 border-t border-white/10 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
                    <div className="text-sm text-white/60 mb-4 sm:mb-0">
                        <p>© {currentYear} Все права защищены.</p>
                        <button
                            onClick={() => setPrivacyModalOpen(true)}
                            className="mt-2 text-white/50 hover:text-white underline transition-colors focus:outline-none"
                        >
                            Политика конфиденциальности
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <a
                            href="https://t.me/timammn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors"
                            aria-label="Telegram"
                        >
                            <Send size={20} />
                        </a>
                        <a
                            href="https://github.com/blesswrld"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </footer>

            {/* --- РЕНДЕР МОДАЛЬНОГО ОКНА --- */}
            <PrivacyModal
                isOpen={isPrivacyModalOpen}
                onClose={() => setPrivacyModalOpen(false)}
            />
        </>
    );
};
