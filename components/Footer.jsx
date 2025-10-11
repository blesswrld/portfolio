"use client";

import { useState } from "react";
import { Github, Send, MessageCircle } from "lucide-react";
import { PrivacyModal } from "./PrivacyModal";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer({ selectedIndex }) {
    const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    const contactTabIndex = 3;

    if (selectedIndex === contactTabIndex) {
        return null;
    }

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
                    <TooltipProvider delayDuration={100}>
                        <div className="flex items-center justify-center gap-6">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://t.me/timammn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-white transition-colors"
                                        aria-label="Telegram"
                                    >
                                        <Send size={20} />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Telegram</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://wa.me/79957015741"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-white transition-colors"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle size={20} />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>WhatsApp</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://github.com/blesswrld"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-white transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </TooltipProvider>
                </div>
            </footer>

            <PrivacyModal
                isOpen={isPrivacyModalOpen}
                onClose={() => setPrivacyModalOpen(false)}
            />
        </>
    );
}
