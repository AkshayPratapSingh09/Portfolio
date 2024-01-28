"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Shoppers Assist",
    description:
      "Etsy Sellers' Assistant to Help choose your next product better!",
    link: "shoper-six.vercel.app",
    github: "https://github.com/AkshayPratapSingh09/Shoper",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Wordly Text Playground",
    description:
      "Play with your text and track every word of it!",
    link: "https://wordly-pi.vercel.app/",
    github: "https://github.com/AkshayPratapSingh09/Wordly--Text-Playground",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "The Idea App",
    description:
      "Todo Themed Web App to collect your idea and frame them in organised manner",
    link: "https://the-idea-app.vercel.app/",
    github: "https://github.com/AkshayPratapSingh09/The-Idea-App",
  },
  {
    image: "/work/2.png",
    category: "Html CSS",
    name: "Gemini AI Extension",
    description:
      "Your Personal Google's Gemini Based Chat Assistant to help you multitask with Ocean of knowledge",
    link: "https://github.com/AkshayPratapSingh09/Gemini-Extension",
    github: "https://github.com/AkshayPratapSingh09/Gemini-Extension",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Style - Find Fonts",
    description:
      "Find your favourite Fonts from the depth of Gihub repos!",
    link: "https://stylerv0.vercel.app/",
    github: "https://github.com/AkshayPratapSingh09/Styler",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Personal Expense Tracker",
    description:
      "Fix your budget and track your Expenses!",
    link: "https://geekap09.github.io/React-Expense-Tracker/",
    github: "https://github.com/AkshayPratapSingh09/React-Expense-Tracker",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "ELA - Ecommerce",
    description:
      "Fully Functional Ecommerce Web App for Shopping Goods.",
    link: "http://devap09.pythonanywhere.com/#/",
    github: "https://github.com/AkshayPratapSingh09/React-Ecom-Site",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Movie Recommender",
    description:
      "Movie Recommendation System based on IMDb data.",
    link: "https://geekap09-movie-recommendation-system-1-we-dy9j2v.streamlit.app/",
    github: "https://github.com/AkshayPratapSingh09/movie-recommendation-system",
  },
  {
    image: "/work/4.png",
    category: "react js",
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
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
