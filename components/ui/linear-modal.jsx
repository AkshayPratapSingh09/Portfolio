"use client";
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
    useId,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DialogContext = createContext(null);

function useDialog() {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialog must be used within a Dialog");
    }
    return context;
}

// Optimized spring transition for smooth animations
const smoothTransition = {
    type: "spring",
    stiffness: 200,
    damping: 24,
    mass: 0.8,
};

const fadeTransition = {
    duration: 0.2,
    ease: "easeOut",
};

export function Dialog({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const uniqueId = useId();
    const triggerRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <DialogContext.Provider
            value={{ isOpen, setIsOpen, uniqueId, triggerRef }}
        >
            {children}
        </DialogContext.Provider>
    );
}

export function DialogTrigger({ children, className, style }) {
    const { setIsOpen, isOpen } = useDialog();

    return (
        <motion.div
            className={cn("cursor-pointer", className)}
            style={{ ...style, willChange: "transform" }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
        >
            {children}
        </motion.div>
    );
}

export function DialogContainer({ children, className, overlayClassName }) {
    const { isOpen, setIsOpen, uniqueId } = useDialog();

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    <motion.div
                        key={`backdrop-${uniqueId}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={fadeTransition}
                        className={cn(
                            "fixed inset-0 z-50 backdrop-blur-sm",
                            overlayClassName
                        )}
                        onClick={() => setIsOpen(false)}
                        style={{ willChange: "opacity" }}
                    />
                    <motion.div
                        className={cn("fixed inset-0 z-50 flex items-center justify-center pointer-events-none", className)}
                    >
                        <div className="pointer-events-auto">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export function DialogContent({ children, className, style }) {
    const { setIsOpen } = useDialog();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={smoothTransition}
            className={cn("cursor-default", className)}
            style={{ ...style, willChange: "transform, opacity" }}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </motion.div>
    );
}

export function DialogImage({ src, alt, className }) {
    return (
        <motion.img
            src={src}
            alt={alt}
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
        />
    );
}

export function DialogTitle({ children, className }) {
    return (
        <motion.h2
            className={className}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
        >
            {children}
        </motion.h2>
    );
}

export function DialogDescription({ children, className, variants }) {
    return (
        <motion.div
            initial={variants?.initial || { opacity: 0, y: 15 }}
            animate={variants?.animate || { opacity: 1, y: 0 }}
            exit={variants?.exit || { opacity: 0, y: 15 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function DialogClose({ className }) {
    const { setIsOpen } = useDialog();

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            onClick={() => setIsOpen(false)}
            className={cn(
                "absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors z-20",
                className
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <X className="w-5 h-5" />
        </motion.button>
    );
}
