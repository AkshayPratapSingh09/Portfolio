import { Wand2, MonitorSmartphone, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./card";

const servicesData = [
  {
    icon: <Wand2 size={60} strokeWidth={1} />,
    title: "AI Integrated Apps",
    description:
      "Worked with various AI models and tools to enhance project capabilities, leveraging diverse AI tech for better outcomes like Gemini, OpenAI.",
  },
  {
    icon: <MonitorSmartphone size={60} strokeWidth={1} />,
    title: "Web Development",
    description:
      "Development across diverse technology stacks, integrating advanced features for a robust and scalable solution. Implemented cutting-edge functionalities to elevate the user experience and system capabilities.",
  },
  {
    icon: <Smartphone size={60} strokeWidth={1} />,
    title: "Responsive Designs",
    description:
      "Cross-platform compatibility, ensuring seamless user experiences across devices. Prioritized responsiveness to guarantee optimal performance on various screen sizes and resolutions.",
  },
];

const Services = () => {
  return (
    <section className="mb-16 xl:mb-36 pt-6">
      <div className="container mx-auto">
        <h2 className="section-title mb-16 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items  */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-16 xl:gap-y-24 gap-x-8 max-w-6xl mx-auto">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[400px] min-h-[320px] h-auto flex flex-col pt-16 pb-8 px-6 sm:px-8 justify-start items-center relative bg-slate-100 dark:bg-secondary/20 border-2 border-transparent hover:border-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group rounded-[30px]"
                key={index}
              >
                {/* Floating Icon Badge - centered and positioned so it never overlaps the title */}
                <div className="text-primary absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-[96px] h-[78px] bg-white dark:bg-slate-900 rounded-2xl flex justify-center items-center shadow-lg border border-border/40 group-hover:scale-110 transition-transform duration-300 p-2">
                    {item.icon}
                  </div>
                </div>
                <CardContent className="p-0 text-center flex flex-col items-center flex-1 justify-start">
                  <CardTitle className="mb-4 text-2xl font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
