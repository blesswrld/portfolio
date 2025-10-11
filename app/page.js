"use client";

import { useState, useRef, useEffect } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ResumeTab } from "@/components/ResumeTab";
import { PortfolioTab } from "@/components/PortfolioTab";
import { ServicesTab } from "@/components/ServicesTab";
import { ContactTab } from "@/components/ContactTab";
import { TabTransition } from "@/components/TabTransition";
import { Footer } from "@/components/Footer";

const tabsConfig = [
    { name: "Резюме", component: <ResumeTab />, hash: "resume" },
    { name: "Портфолио", component: <PortfolioTab />, hash: "portfolio" },
    { name: "Услуги", component: <ServicesTab />, hash: "services" },
    { name: "Контакты", component: <ContactTab />, hash: "contact" },
];

export default function HomePage() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const tabPanelsRef = useRef(null);

    useEffect(() => {
        const updateTabFromHash = () => {
            const currentHash = window.location.hash.replace("#", "");
            if (currentHash) {
                const initialIndex = tabsConfig.findIndex(
                    (tab) => tab.hash === currentHash
                );
                if (initialIndex !== -1) {
                    setSelectedIndex(initialIndex);
                } else {
                    setSelectedIndex(0);
                }
            } else {
                setSelectedIndex(0);
            }
        };

        updateTabFromHash();

        window.addEventListener("hashchange", updateTabFromHash);

        return () => {
            window.removeEventListener("hashchange", updateTabFromHash);
        };
    }, []);

    const switchToContactTab = () => {
        const contactTabIndex = tabsConfig.findIndex(
            (tab) => tab.name === "Контакты"
        );
        if (contactTabIndex !== -1) {
            setSelectedIndex(contactTabIndex);
            window.location.hash = tabsConfig[contactTabIndex].hash;
            tabPanelsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleTabChange = (index) => {
        setSelectedIndex(index);
        window.location.hash = tabsConfig[index].hash;
    };

    const tabs = tabsConfig.map((tab) => {
        if (tab.name === "Услуги") {
            return {
                ...tab,
                component: (
                    <ServicesTab onDiscussProject={switchToContactTab} />
                ),
            };
        }
        return tab;
    });

    if (selectedIndex === null) {
        return null;
    }

    return (
        <>
            <main className="flex w-full justify-center px-4 py-16 sm:py-24">
                <div className="w-full max-w-5xl">
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

                    <TabGroup
                        selectedIndex={selectedIndex}
                        onChange={handleTabChange}
                    >
                        <TabList className="flex flex-wrap md:flex-nowrap justify-center gap-4">
                            {tabs.map(({ name }) => (
                                <Tab
                                    key={name}
                                    className="rounded-full px-4 py-1.5 text-sm font-semibold text-white focus:outline-none data-[hover]:bg-white/10 data-[selected]:bg-white/20 data-[focus]:ring-2 data-[focus]:ring-white transition-colors"
                                >
                                    {name}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels ref={tabPanelsRef} className="mt-8">
                            <TabTransition selectedIndex={selectedIndex}>
                                {tabs.map(({ name, component }) => (
                                    <TabPanel key={name} unmount={false}>
                                        {component}
                                    </TabPanel>
                                ))}
                            </TabTransition>
                        </TabPanels>
                    </TabGroup>
                </div>
            </main>
            <Footer selectedIndex={selectedIndex} />
        </>
    );
}
