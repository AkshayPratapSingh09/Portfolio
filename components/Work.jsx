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
    image: "/work/expense_Tracker.png",
    category: "react js",
    name: "Personal Expense Tracker",
    description:
      "Fix your budget and track your Expenses!",
    link: "https://geekap09.github.io/React-Expense-Tracker/",
    github: "https://github.com/AkshayPratapSingh09/React-Expense-Tracker",
    align: "object-center",
  },
  {
    image: "/work/ela.png",
    category: "react js",
    name: "ELA - Ecommerce",
    description:
      "Fully Functional Ecommerce Web App for Shopping Goods.",
    link: "http://devap09.pythonanywhere.com/#/",
    github: "https://github.com/AkshayPratapSingh09/React-Ecom-Site",
    align: "object-top",
  },
  {
    image: "/work/movie.png",
    category: "react js",
    name: "Movie Recommender",
    description:
      "Movie Recommendation System based on IMDb data.",
    link: "https://geekap09-movie-recommendation-system-1-we-dy9j2v.streamlit.app/",
    github: "https://github.com/AkshayPratapSingh09/movie-recommendation-system",
    align: "object-top",
  },
  {
    image: "/work/Bookey.png",
    category: "react js",
    name: "Bookey - The Bookmark App",
    description:
      "One Spot for storing your Bookmarks and readlists!",
    link: "https://bookey.vercel.app/",
    github: "https://github.com/GeekAp09/Bookey",
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
            {/* show only the first 4 projects for the slides  */}
            {projectData.slice(0, 4).map((project, index) => {
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
