"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import LinearProjectCard from "@/components/LinearProjectCard";

const projectData = [
  {
    image: "/work/intelligent-loan-advisor.png",
    category: "AI & GenAI",
    name: "Intelligent Loan Advisor & Policy Assistant",
    description:
      "Enterprise GenAI & RAG assistant for banking policies, underwriting rules, and loan eligibility with citation tracking and multi-LLM reasoning.",
    link: "https://github.com/suyogyadav404/Intelligent-Loan-Advisor-and-Policy-Assistant",
    github: "https://github.com/suyogyadav404/Intelligent-Loan-Advisor-and-Policy-Assistant",
  },
  {
    image: "/work/whisper-self.png",
    category: "AI & GenAI",
    name: "WhisperSelf Voice Dictation",
    description:
      "Sub-second on-device voice dictation pipeline for Apple Silicon powered by Apple Neural Engine (ANE), Metal shaders, Silero VAD, and a floating HUD.",
    link: "https://github.com/AkshayPratapSingh09/WhisperSelf",
    github: "https://github.com/AkshayPratapSingh09/WhisperSelf",
  },
  {
    image: "/work/explainer-ai.png",
    category: "AI & GenAI",
    name: "ExplainerAI",
    description:
      "Voice-first conversational AI assistant converting dense technical documents, financial sheets, and complex clauses into natural Hinglish audio explanations.",
    link: "https://github.com/AkshayPratapSingh09/ExplainerAI",
    github: "https://github.com/AkshayPratapSingh09/ExplainerAI",
  },
  {
    image: "/work/hisab-app.png",
    category: "Mobile Apps",
    name: "HisabApp — Personal Finance",
    description:
      "Privacy-first personal finance and automated wealth tracker with multi-bank statement ingestion (SBI, PNB, ICICI), spending breakdowns, and NLP query parsing.",
    link: "https://github.com/AkshayPratapSingh09/HisabApp",
    github: "https://github.com/AkshayPratapSingh09/HisabApp",
  },
  {
    image: "/work/clipboard-sync.png",
    category: "Systems & Tools",
    name: "ClipboardSync & Auto-Typer",
    description:
      "High-speed keyboard typing simulator and cross-device clipboard sync engine featuring WebSockets, remote mobile companion UI, and smart indentation clearing.",
    link: "https://github.com/AkshayPratapSingh09/Clipboard-Sync",
    github: "https://github.com/AkshayPratapSingh09/Clipboard-Sync",
  },
  {
    image: "/work/mymem.png",
    category: "Mobile Apps",
    name: "MyMem Social Media Vault",
    description:
      "Instagram link preview extractor and archival vault triggering automated GitHub Actions to persist structured JSON records and media previews.",
    link: "https://github.com/AkshayPratapSingh09/mymem",
    github: "https://github.com/AkshayPratapSingh09/mymem",
  },
  {
    image: "/work/dsa-tracker.png",
    category: "Full Stack & Web",
    name: "DSA Mastery Tracker",
    description:
      "Feature-rich daily algorithmic problem tracking dashboard featuring GitHub sync, topic completion metrics, company tags, and calendar planner.",
    link: "https://github.com/AkshayPratapSingh09/DSA-Tracker",
    github: "https://github.com/AkshayPratapSingh09/DSA-Tracker",
  },
  {
    image: "/work/shopper-assist.png",
    category: "Full Stack & Web",
    name: "Shoppers Assist",
    description:
      "Etsy Sellers' Assistant to Help choose your next product better!",
    link: "https://shoper-six.vercel.app",
    github: "https://github.com/AkshayPratapSingh09/Shoper",
  },
  {
    image: "/work/Wordly.png",
    category: "Full Stack & Web",
    name: "Wordly Text Playground",
    description:
      "Play with your text and track every word of it!",
    link: "https://wordly-pi.vercel.app/",
    github: "https://github.com/AkshayPratapSingh09/Wordly--Text-Playground",
  },
  {
    image: "/work/The-idea-app.png",
    category: "Full Stack & Web",
    name: "The Idea App",
    description:
      "Todo Themed Web App to collect your idea and frame them in organised manner",
    link: "https://the-idea-app.vercel.app/",
    github: "https://github.com/AkshayPratapSingh09/The-Idea-App",
  },
  {
    image: "/work/gemini_chat.png",
    category: "AI & GenAI",
    name: "Gemini AI Extension",
    description:
      "Your Personal Google's Gemini Based Chat Assistant to help you multitask with Ocean of knowledge",
    link: "https://github.com/AkshayPratapSingh09/Gemini-Extension",
    github: "https://github.com/AkshayPratapSingh09/Gemini-Extension",
  },
  {
    image: "/work/styler.png",
    category: "Full Stack & Web",
    name: "Style - Find Fonts",
    description:
      "Find your favourite Fonts from the depth of Gihub repos!",
    link: "https://stylerv0.vercel.app/",
    github: "https://github.com/AkshayPratapSingh09/Styler",
  },
  {
    image: "/work/expense_Tracker.png",
    category: "Systems & Tools",
    name: "Personal Expense Tracker",
    description:
      "Fix your budget and track your Expenses!",
    link: "https://geekap09.github.io/React-Expense-Tracker/",
    github: "https://github.com/AkshayPratapSingh09/React-Expense-Tracker",
  },
  {
    image: "/work/ela.png",
    category: "Full Stack & Web",
    name: "ELA - Ecommerce",
    description:
      "Fully Functional Ecommerce Web App for Shopping Goods.",
    link: "http://devap09.pythonanywhere.com/#/",
    github: "https://github.com/AkshayPratapSingh09/React-Ecom-Site",
  },
  {
    image: "/work/movie.png",
    category: "AI & GenAI",
    name: "Movie Recommender",
    description:
      "Movie Recommendation System based on IMDb data.",
    link: "https://geekap09-movie-recommendation-system-1-we-dy9j2v.streamlit.app/",
    github: "https://github.com/AkshayPratapSingh09/movie-recommendation-system",
  },
  {
    image: "/work/Bookey.png",
    category: "Systems & Tools",
    name: "Bookey - The Bookmark App",
    description:
      "One Spot for storing your Bookmarks and readlists!",
    link: "https://bookey.vercel.app/",
    github: "https://github.com/GeekAp09/Bookey",
  },
];

//  remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full flex flex-wrap justify-center items-center gap-2 max-w-[850px] mb-12 mx-auto p-1.5 rounded-2xl md:border dark:border-none bg-muted/40 dark:bg-secondary/40 shadow-sm">
            {categories.map((cat, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(cat)}
                  value={cat}
                  key={index}
                  className="capitalize px-4 py-2 text-xs md:text-sm rounded-xl font-medium transition-all"
                >
                  {cat}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <TabsContent value={category} className="outline-none">
            <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
                return (
                  <LinearProjectCard project={project} key={index} />
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
