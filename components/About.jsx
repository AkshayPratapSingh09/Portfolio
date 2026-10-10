import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Akshay Pratap Singh",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9045304479",
  },
  {
    icon: <MailIcon size={20} />,
    text: "worklikeakshay@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 9th Feb , 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors of Technology (CSE)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: " NCR , India ",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "RRK School Moradabad Uttar Pradesh",
        qualification: "Secondary Education",
        years: "2018 - 2019",
      },
      {
        university: "RRK School Moradabad Uttar Pradesh",
        qualification: "Senior Secondary Education",
        years: "2020 - 2021",
      },
      {
        university:
          "Noida Institute of Engineering And Technology, Greater Noida",
        qualification: "Bachelor of Technology (CSE)",
        years: "2021 - 2025",
      },
      // {
      //   university: "LPU University",
      //   qualification: "Master of Computer Applications",
      //   years: "2024 - Present",
      // },
      // {
      //     university: 'IIT Patna',
      //     qualification: 'M.Tech in Cloud Computing',
      //     years:'2026- 2028',
      // },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Wipro",
        role: "Project Engineer",
        years: "March 2026 - Present",
      },
    ],
  },
];

const skillNames = {
  python: "Python",
  java: "Java",
  html: "HTML5",
  css: "CSS3",
  js: "JavaScript",
  react: "React",
  nextjs: "Next.js",
  bootstrap: "Bootstrap",
  vite: "Vite",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  vercel: "Vercel",
  flask: "Flask",
  django: "Django",
  replit: "Replit",
  codepen: "CodePen",
  figma: "Figma",
  postman: "Postman",
  mongodb: "MongoDB",
  postgres: "PostgreSQL",
  mysql: "MySQL",
  sqlite: "SQLite",
  redis: "Redis",
  vscode: "VS Code",
  docker: "Docker",
  firebase: "Firebase",
};

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: ["python", "java", "html", "css", "js"],
      },
      {
        name: [
          "react",
          "nextjs",
          "bootstrap",
          "vite",
          "typescript",
          "tailwind",
          "vercel",
        ],
      },
      {
        name: ["flask", "django", "replit", "codepen", "figma"],
      },
      {
        name: ["postman", "mongodb", "postgres", "mysql", "sqlite", "redis"],
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        path: "vscode",
      },
      {
        path: "docker",
      },
      {
        path: "firebase",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  //  console.log(getData(qualificationData , 'experience'))
  return (
    <section className="xl:h-auto pb-12 pt-1 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image  */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative flex items-center justify-center"
              imgSrc="/about/dev.png"
            />
          </div>
          {/* tabs  */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-3 max-w-[520px] mx-auto xl:mx-0 border dark:border-none p-1">
                <TabsTrigger className="w-auto text-xs sm:text-sm md:text-base px-2 py-1.5 truncate" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-auto text-xs sm:text-sm md:text-base px-2 py-1.5 truncate"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-auto text-xs sm:text-sm md:text-base px-2 py-1.5 truncate" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 2 years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages  */}
                    <div className="flex  flex-col gap-y-2">
                      <div className="text-primary">Languages Skill</div>
                      <div className="border-b border-border">
                        English , German , Hindi , Marathi
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications  */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper  */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* education  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-6">What I Use Everyday</h3>
                    {/* skills  */}
                    <div className="mb-10">
                      <h4 className="text-xl font-semibold mb-2 text-center xl:text-left">
                        Skills (Full Stack Development)
                      </h4>
                      <div className="border-b border-border mb-6"></div>
                      {/* Skill List  */}
                      <div className="flex flex-col gap-y-4">
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;

                            return (
                              <div
                                className="flex flex-wrap items-center justify-center xl:justify-start gap-2 sm:gap-3 py-1"
                                key={index}
                              >
                                {name.map((icon, iconIdx) => {
                                  const displayName = skillNames[icon] || icon;
                                  return (
                                    <div
                                      key={icon || iconIdx}
                                      className="group flex flex-col items-center justify-center w-[72px] sm:w-[78px] py-2 px-1 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 dark:hover:bg-secondary/40 cursor-default"
                                      title={displayName}
                                    >
                                      <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        <img
                                          src={`./about/${icon}.svg`}
                                          alt={displayName}
                                          width={48}
                                          height={48}
                                          className="w-12 h-12 object-contain"
                                        />
                                      </div>
                                      <span className="mt-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary text-center truncate max-w-full transition-colors">
                                        {icon}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools  */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-center xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-6"></div>
                      {/* tool list  */}
                      <div className="flex flex-wrap items-center justify-center xl:justify-start gap-2 sm:gap-3 py-1">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { path } = item;
                          const displayName = skillNames[path] || path;
                          return (
                            <div
                              key={index}
                              className="group flex flex-col items-center justify-center w-[72px] sm:w-[78px] py-2 px-1 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 dark:hover:bg-secondary/40 cursor-default"
                              title={displayName}
                            >
                              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img
                                  src={`./about/${path}.svg`}
                                  width={48}
                                  height={48}
                                  alt={displayName}
                                  className="w-12 h-12 object-contain"
                                />
                              </div>
                              <span className="mt-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary text-center truncate max-w-full transition-colors">
                                {path}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
