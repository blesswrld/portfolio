"use client";

import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

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
    </motion.div>
);
