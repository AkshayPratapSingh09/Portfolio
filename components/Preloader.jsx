"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Add a small delay to ensure smooth transition
            setTimeout(() => setIsLoading(false), 800);
        };

        // Check if document is already ready
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
                >
                    <div className="flex flex-row">
                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect x="8" y="8" width="64" height="64"></rect>
                                <text
                                    x="50%"
                                    y="60%"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    style={{ fill: "var(--path)" }}
                                >
                                    L
                                </text>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect x="8" y="8" width="64" height="64"></rect>
                                <text
                                    x="50%"
                                    y="60%"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    style={{ fill: "var(--path)" }}
                                >
                                    O
                                </text>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect x="8" y="8" width="64" height="64"></rect>
                                <text
                                    x="50%"
                                    y="60%"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    style={{ fill: "var(--path)" }}
                                >
                                    A
                                </text>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect x="8" y="8" width="64" height="64"></rect>
                                <text
                                    x="50%"
                                    y="60%"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    style={{ fill: "var(--path)" }}
                                >
                                    D
                                </text>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect x="8" y="8" width="64" height="64"></rect>
                                <text
                                    x="50%"
                                    y="60%"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    style={{ fill: "var(--path)" }}
                                >
                                    I
                                </text>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect x="8" y="8" width="64" height="64"></rect>
                                <text
                                    x="50%"
                                    y="60%"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    style={{ fill: "var(--path)" }}
                                >
                                    N
                                </text>
                            </svg>
                        </div>

                        <div className="loader">
                            <svg viewBox="0 0 80 80">
                                <rect x="8" y="8" width="64" height="64"></rect>
                                <text
                                    x="50%"
                                    y="60%"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                    style={{ fill: "var(--path)" }}
                                >
                                    G
                                </text>
                            </svg>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
