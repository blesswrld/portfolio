"use client";
import { servicesData } from "../data/servicesData";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

// Принимаем onDiscussProject как пропс
export const ServicesTab = ({ onDiscussProject }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
        <div className="text-center mt-12 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg">
            <p className="text-white/60">
                * Указанные цены являются ориентировочными и обсуждаются
                индивидуально.
            </p>
            <p className="mt-4">
                <Button onClick={onDiscussProject}>Обсудить ваш проект</Button>
            </p>
        </div>
    </motion.div>
);
