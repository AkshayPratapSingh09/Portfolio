"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CoverflowCarousel } from "./ui/coverflow-carousel";
import {
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  X,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const certificatesData = [
  {
    id: "ms-ai-doc",
    title: "Azure AI Document Intelligence",
    subtitle: "Intelligent document processing solution using Azure Cognitive Services",
    issuer: "Microsoft",
    issuerBadge: "Microsoft Certified",
    date: "January 31, 2024",
    credentialId: "461CEE109276D9CE",
    image: "/certificate/microsoft-1.png",
    alt: "Microsoft Azure AI Document Intelligence Certificate",
    category: "AI & Document Intelligence",
    skills: ["Azure AI", "OCR", "Document Intelligence", "Cloud Cognitive APIs"],
  },
  {
    id: "ms-ai-vision-1",
    title: "Azure AI Vision Solution",
    subtitle: "Computer vision, image analysis, and visual intelligence workflows",
    issuer: "Microsoft",
    issuerBadge: "Microsoft Certified",
    date: "January 31, 2024",
    credentialId: "D4CC12CD47061F8C",
    image: "/certificate/microsoft-2.png",
    alt: "Microsoft Azure AI Vision Solution Certificate",
    category: "Computer Vision & AI",
    skills: ["Azure Computer Vision", "Image Analysis", "Object Detection", "Cognitive AI"],
  },
  {
    id: "ms-ai-vision-2",
    title: "Azure AI Vision Engineering",
    subtitle: "Advanced Azure Vision integration, multimodal models, and production AI",
    issuer: "Microsoft",
    issuerBadge: "Microsoft Certified",
    date: "January 31, 2024",
    credentialId: "D4CC12CD47061F8C",
    image: "/certificate/microsoft-3.png",
    alt: "Microsoft Azure AI Vision Engineering Certificate",
    category: "Cloud AI Engineering",
    skills: ["Azure Cloud", "Visual Machine Learning", "API Integration", "Model Deployment"],
  },
  {
    id: "deloitte-tech",
    title: "Technology Virtual Experience",
    subtitle: "Practical engineering tasks in Coding, Data Analysis, Cloud, and Cyber Security",
    issuer: "Deloitte",
    issuerBadge: "Forage Verified",
    date: "June 27, 2023",
    credentialId: "gBG8KiunbpDGfroF2",
    image: "/certificate/deloitte.png",
    alt: "Deloitte Technology Virtual Experience Certificate",
    category: "Consulting & Systems",
    skills: ["Python", "Data Analysis", "Cyber Security", "Forensic Tech"],
  },
  {
    id: "goldman-swe",
    title: "Software Engineering Virtual Experience",
    subtitle: "Password database cryptography, security cracking analysis & resilience",
    issuer: "Goldman Sachs",
    issuerBadge: "Forage Verified",
    date: "July 6, 2023",
    credentialId: "cYNBkTJx5vtg3PJz",
    image: "/certificate/goldman.png",
    alt: "Goldman Sachs Software Engineering Virtual Experience Certificate",
    category: "Software Engineering",
    skills: ["Cryptography", "Backend Security", "Algorithms", "System Resilience"],
  },
  {
    id: "django-react",
    title: "Django with React | Ecommerce",
    subtitle: "Full-Stack architecture with Django REST framework, Redux, and React frontend",
    issuer: "Udemy",
    issuerBadge: "Dennis Ivy & Brad Traversy",
    date: "April 3, 2023",
    credentialId: "UC-2aec0805-dfed-433a-93d5-49dba5dbbf8e",
    image: "/certificate/django.png",
    alt: "Django with React Ecommerce Website Certificate",
    category: "Full Stack Development",
    skills: ["Django", "Python", "React", "REST APIs", "PostgreSQL"],
  },
  {
    id: "ibm-python-ai",
    title: "Python for Data Science, AI & Dev",
    subtitle: "Core Python, scientific computing, NumPy, Pandas, REST APIs, and AI models",
    issuer: "IBM",
    issuerBadge: "Coursera & IBM",
    date: "June 2, 2022",
    credentialId: "HDQ9YXUT2PP4",
    image: "/certificate/ibm.png",
    alt: "IBM Python for Data Science, AI & Development Certificate",
    category: "Data Science & AI",
    skills: ["Python", "Pandas", "NumPy", "Data Science", "Jupyter"],
  },
  {
    id: "ibm-intro-ai",
    title: "Introduction to Artificial Intelligence",
    subtitle: "Core foundations of AI, Machine Learning, Deep Neural Networks, and ethics",
    issuer: "IBM",
    issuerBadge: "Coursera & IBM",
    date: "February 16, 2022",
    credentialId: "3H6EHBPZ8XAM",
    image: "/certificate/ibm_ai.png",
    alt: "IBM Introduction to Artificial Intelligence Certificate",
    category: "Artificial Intelligence",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "AI Ethics"],
  },
  {
    id: "python-optimization",
    title: "Python Performance Optimization",
    subtitle: "Profiling, algorithmic efficiency, memory tuning, and execution benchmarking",
    issuer: "Udemy",
    issuerBadge: "Frank Anemaet",
    date: "January 24, 2023",
    credentialId: "UC-31e7885c-fcbf-4a15-b1bc-074f7f70574d",
    image: "/certificate/optimization.png",
    alt: "Python Performance Optimization Certificate",
    category: "System Performance",
    skills: ["Python Optimization", "Memory Profiling", "Benchmarking", "Concurrency"],
  },
];

export function Certificates() {
  // Requirement: "not starting from 0, it should be starting from first (one next pressed already)"
  const [activeIndex, setActiveIndex] = useState(1);
  const [modalCertificate, setModalCertificate] = useState(null);

  const activeCert = certificatesData[activeIndex] || certificatesData[0];

  const handleCardClick = (item) => {
    setModalCertificate(item);
  };

  return (
    <section className="relative mb-16 xl:mb-24 py-10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 dark:bg-primary/15 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute right-10 top-20 w-[300px] h-[300px] bg-secondary/20 dark:bg-primary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="section-title text-center mx-auto mb-4">
            Certifications
          </h2>
          <p className="subtitle text-sm sm:text-base max-w-lg mx-auto mb-2">
            Professional certifications and accredited virtual experience programs across GenAI, Computer Vision, and Full Stack Architecture.
          </p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div className="relative mx-auto max-w-6xl">
          <CoverflowCarousel
            autoplay={false}
            depth={190}
            initialIndex={1}
            items={certificatesData}
            loop={true}
            onCardClick={handleCardClick}
            onIndexChange={(idx) => setActiveIndex(idx)}
            rotation={42}
            scaleStep={0.14}
            spacing={230}
          />
        </div>

        {/* Dynamic Active Certificate Detail Card */}
        <div className="mt-8 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCert.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-5 sm:p-6 backdrop-blur-md shadow-xl dark:border-white/10 dark:bg-zinc-900/80"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
                      <Award className="h-3 w-3" />
                      {activeCert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {activeCert.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground truncate">
                    {activeCert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {activeCert.subtitle}
                  </p>

                  {/* Skills tags */}
                  {activeCert.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {activeCert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md bg-secondary/60 dark:bg-white/5 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Inspect Button */}
                <button
                  type="button"
                  onClick={() => setModalCertificate(activeCert)}
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Maximize2 className="h-4 w-4" />
                  <span>View Certificate</span>
                </button>
              </div>

              {/* Credential ID / Verification footer */}
              {activeCert.credentialId && (
                <div className="mt-4 pt-3 border-t border-border/50 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
                    <span>ID: <code className="font-mono">{activeCert.credentialId}</code></span>
                  </div>
                  <span className="text-primary font-medium">{activeCert.issuerBadge}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      <AnimatePresence>
        {modalCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setModalCertificate(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-border/80 bg-background shadow-2xl dark:border-white/10 dark:bg-zinc-900"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 dark:border-white/10">
                <div className="flex items-center gap-2.5 min-w-0 pr-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-foreground truncate">
                      {modalCertificate.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {modalCertificate.issuer} · {modalCertificate.date}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={() => setModalCertificate(null)}
                  className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="max-h-[70vh] overflow-auto p-4 sm:p-6 bg-muted/30 dark:bg-zinc-950 flex items-center justify-center">
                <img
                  src={modalCertificate.image}
                  alt={modalCertificate.alt}
                  className="max-h-[60vh] w-auto rounded-lg shadow-lg object-contain bg-white"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 px-5 py-3.5 text-xs text-muted-foreground dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Official Verified Credential</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={modalCertificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                  >
                    <span>Open full image</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setModalCertificate(null)}
                    className="rounded-lg border border-border px-3 py-1.5 font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;
