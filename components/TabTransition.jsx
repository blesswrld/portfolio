"use client";

import { useEffect } from "react";
import NProgress from "nprogress";

export const TabTransition = ({ children, selectedIndex }) => {
    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [selectedIndex]);

    return <>{children}</>;
};
