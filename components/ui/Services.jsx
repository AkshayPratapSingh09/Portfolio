import { Wand2, MonitorSmartphone, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const servicesData = [
  {
    icon: <Wand2 size={72} strokeWidth={0.8} />,
    title: "AI Integrated Apps",
    description:
      "Worked with various AI models and tools to enhance project capabilities, leveraging diverse AI tech for better outcomes like Gemini,OpenAI",
  },
  {
    icon: <MonitorSmartphone size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Development across diverse technology stacks, integrating advanced features for a robust and scalable solution. Implemented cutting-edge functionalities to elevate the user experience and system capabilities ",
  },
  {
    icon: <Smartphone className="  " size={72} strokeWidth={0.8} />,
    title: "Responsive Designs",
    description:
      "Cross-platform compatibility, ensuring seamless user experiences across devices. Prioritized responsiveness to guarantee optimal performance on various screen sizes and resolutions. ",
  },
];

const Services = () => {
  return (
    <section className="mt-30 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items  */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative bg-slate-100 dark:bg-secondary/20 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 group"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[100px] h-[70px] bg-white dark:bg-slate-900 rounded-2xl flex justify-center items-center shadow-md group-hover:scale-110 transition-transform duration-300 box-content p-2">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground/90">
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
