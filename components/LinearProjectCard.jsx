"use client";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, Github, ExternalLink, Code2 } from "lucide-react";
import { Badge } from "./ui/badge";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogImage,
    DialogClose,
    DialogDescription,
    DialogContainer,
} from "@/components/ui/linear-modal";

const LinearProjectCard = ({ project }) => {
    return (
        <Dialog>
            <DialogTrigger
                style={{
                    borderRadius: "12px",
                }}
                className="flex w-full h-full flex-col overflow-hidden border-3 border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg dark:bg-secondary/40 bg-neutral-50 hover:bg-neutral-100 dark:hover:bg-secondary/60 transition-all"
            >
                {/* Image Section */}
                <div className="relative h-52 w-full bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center overflow-hidden">
                    <DialogImage
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover object-top"
                    />
                    {/* Code Icon Overlay */}
                    <div className="absolute top-3 left-3 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-lg">
                        <Code2 className="w-5 h-5 text-primary" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex grow flex-row items-end justify-between p-4">
                    <div className="flex flex-col gap-1">
                        <Badge className="w-fit mb-1 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 border-none font-medium px-2 py-0.5 text-[10px] uppercase tracking-wider">
                            {project.category}
                        </Badge>
                        <DialogTitle className="text-zinc-900 dark:text-zinc-50 text-lg font-bold line-clamp-1">
                            {project.name}
                        </DialogTitle>
                    </div>
                    <button className="p-2 dark:bg-neutral-700 bg-neutral-200 hover:bg-neutral-300 rounded-lg dark:hover:bg-neutral-600 transition-colors flex-shrink-0">
                        <Maximize2 className="w-5 h-5 dark:text-white" />
                    </button>
                </div>
            </DialogTrigger>

            <DialogContainer
                className="pt-10 pb-10 px-4"
                overlayClassName="dark:bg-[radial-gradient(125%_125%_at_50%_10%,#0a0a0a_40%,#1a1a2e_100%)] bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#e0e0e0_100%)]"
            >
                <DialogContent
                    style={{
                        borderRadius: "24px",
                    }}
                    className="relative flex flex-col overflow-hidden border dark:bg-card bg-white shadow-2xl lg:w-[700px] md:w-[600px] w-[90%] max-h-[85vh]"
                >
                    {/* Close Button */}
                    <DialogClose className="z-10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm" />

                    {/* Image */}
                    <div className="relative w-full h-64 md:h-80 bg-slate-100 dark:bg-slate-900/50 overflow-hidden">
                        <DialogImage
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-card to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 -mt-10 relative z-10">
                        <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 border-none font-medium px-3 py-1 text-xs uppercase tracking-wider">
                            {project.category}
                        </Badge>

                        <DialogTitle className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                            {project.name}
                        </DialogTitle>

                        <DialogDescription
                            disableLayoutAnimation
                            variants={{
                                initial: { opacity: 0, scale: 0.95, y: 20 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.95, y: 20 },
                            }}
                        >
                            <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </Link>
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                                >
                                    <Github className="w-4 h-4" />
                                    View Code
                                </Link>
                            </div>
                        </DialogDescription>
                    </div>
                </DialogContent>
            </DialogContainer>
        </Dialog>
    );
};

export default LinearProjectCard;
