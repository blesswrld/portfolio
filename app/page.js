"use client";

import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ResumeTab } from "@/components/ResumeTab";
import { PortfolioTab } from "@/components/PortfolioTab";
import { ServicesTab } from "@/components/ServicesTab";
import { ContactTab } from "@/components/ContactTab";
import { TabTransition } from "@/components/TabTransition";

// Выносим массив наружу, чтобы получить доступ к индексам
const tabsConfig = [
    { name: "Резюме", component: <ResumeTab /> },
    { name: "Портфолио", component: <PortfolioTab /> },
    { name: "Услуги", component: <ServicesTab /> },
    { name: "Контакты", component: <ContactTab /> },
];

export default function HomePage() {
    // Состояние для отслеживания активной вкладки
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Функция для программного переключения на вкладку "Контакты"
    const switchToContactTab = () => {
        const contactTabIndex = tabsConfig.findIndex(
            (tab) => tab.name === "Контакты"
        );
        if (contactTabIndex !== -1) {
            setSelectedIndex(contactTabIndex);
        }
    };

    const tabs = [
        { name: "Резюме", component: <ResumeTab /> },
        { name: "Портфолио", component: <PortfolioTab /> },
        {
            name: "Услуги",
            component: <ServicesTab onDiscussProject={switchToContactTab} />,
        },
        { name: "Контакты", component: <ContactTab /> },
    ];

    return (
        <main className="flex w-full justify-center px-4 py-16 sm:py-24">
            <div className="w-full max-w-5xl">
                {/* Показываем заголовок только если выбрана НЕ вкладка "Контакты" */}
                {tabsConfig[selectedIndex].name !== "Контакты" && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Тамерлан Гельгаев
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white/60">
                            Frontend Разработчик
                        </p>
                    </div>
                )}

                {/* Управляем TabGroup через состояние */}
                <TabGroup
                    selectedIndex={selectedIndex}
                    onChange={setSelectedIndex}
                >
                    <TabList className="flex flex-wrap md:flex-nowrap justify-center gap-4">
                        {tabs.map(({ name }) => (
                            <Tab
                                key={name}
                                className="rounded-fuwll px-4 py-1.5 text-sm font-semibold text-white focus:outline-none data-[hover]:bg-white/10 data-[selected]:bg-white/20 data-[focus]:ring-2 data-[focus]:ring-white"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-8">
                        <TabTransition selectedIndex={selectedIndex}>
                            {tabs.map(({ name, component }) => (
                                <TabPanel key={name} unmount={false}>
                                    {/* `unmount={false}` важно для плавных анимаций */}
                                    {component}
                                </TabPanel>
                            ))}
                        </TabTransition>
                    </TabPanels>
                </TabGroup>
            </div>
        </main>
    );
}
