"use client";

import { useEffect } from "react";
import NProgress from "nprogress";

export const TabTransition = ({ children, selectedIndex }) => {
    useEffect(() => {
        // Запускаем прогресс-бар при смене индекса вкладки
        NProgress.start();

        // Завершаем его с небольшой задержкой, чтобы анимация была видна
        const timer = setTimeout(() => {
            NProgress.done();
        }, 200); // 200ms - хорошая задержка

        return () => {
            // Очищаем таймер, если компонент размонтируется
            clearTimeout(timer);
        };
    }, [selectedIndex]); // Эффект будет срабатывать каждый раз, когда меняется selectedIndex

    return <>{children}</>;
};
