"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/intelligent-loan-advisor.png",
    category: "AI & GenAI",
    name: "Intelligent Loan Advisor",
    description:
      "Enterprise GenAI & RAG assistant for banking policies, underwriting rules, and loan eligibility with citation tracking.",
    link: "https://github.com/suyogyadav404/Intelligent-Loan-Advisor-and-Policy-Assistant",
    github: "https://github.com/suyogyadav404/Intelligent-Loan-Advisor-and-Policy-Assistant",
    align: "object-top",
  },
  {
    image: "/work/whisper-self.png",
    category: "AI & GenAI",
    name: "WhisperSelf Voice Dictation",
    description:
      "Sub-second on-device voice dictation for Apple Silicon powered by ANE, Metal shaders, Silero VAD, and floating HUD.",
    link: "https://github.com/AkshayPratapSingh09/WhisperSelf",
    github: "https://github.com/AkshayPratapSingh09/WhisperSelf",
    align: "object-top",
  },
  {
    image: "/work/hisab-app.png",
    category: "Mobile Apps",
    name: "HisabApp — Personal Finance",
    description:
      "Privacy-first wealth tracker with automated multi-bank statement parsing, spending breakdowns, and NLP ingestion.",
    link: "https://github.com/AkshayPratapSingh09/HisabApp",
    github: "https://github.com/AkshayPratapSingh09/HisabApp",
    align: "object-top",
  },
  {
    image: "/work/explainer-ai.png",
    category: "AI & GenAI",
    name: "ExplainerAI",
    description:
      "Voice-first conversational AI transforming complex technical and financial topics into natural Hinglish speech.",
    link: "https://github.com/AkshayPratapSingh09/ExplainerAI",
    github: "https://github.com/AkshayPratapSingh09/ExplainerAI",
    align: "object-top",
  },
  {
    image: "/work/clipboard-sync.png",
    category: "Systems & Tools",
    name: "ClipboardSync & Auto-Typer",
    description:
      "High-speed typing simulator and cross-device clipboard sync engine with WebSocket pairing and smart indentation.",
    link: "https://github.com/AkshayPratapSingh09/Clipboard-Sync",
    github: "https://github.com/AkshayPratapSingh09/Clipboard-Sync",
    align: "object-top",
  },
  {
    image: "/work/mymem.png",
    category: "Mobile Apps",
    name: "MyMem Social Media Vault",
    description:
      "Instagram link preview extractor triggering automated GitHub Actions to persist structured JSON records.",
    link: "https://github.com/AkshayPratapSingh09/mymem",
    github: "https://github.com/AkshayPratapSingh09/mymem",
    align: "object-top",
  },
  {
    image: "/work/dsa-tracker.png",
    category: "Full Stack & Web",
    name: "DSA Mastery Tracker",
    description:
      "Daily algorithmic problem tracking dashboard featuring GitHub sync, topic metrics, company tags, and calendar planner.",
    link: "https://github.com/AkshayPratapSingh09/DSA-Tracker",
    github: "https://github.com/AkshayPratapSingh09/DSA-Tracker",
    align: "object-top",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4"> My Latest Projects</h2>
          <p className="subtitle mb-8">
            Learnings made ideas and insiprations into Reality
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spacebetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show latest projects for the slides  */}
            {projectData.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
