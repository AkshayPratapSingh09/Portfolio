import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text  */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </div>
            <h1 className="h1 mb-4">Hello , my name is <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Akshay Pratap Singh</h1></h1>
            <p className="subtitle max-w-[490] mx-auto xl:mx-0">
            At the Crossroads of creativity and compatibility, I craft digital wonders with a touch of magic. I bring a competitive edge and versatility to seamlessly tackle a spectrum of projects with finesse.
            </p>
            {/* buttons  */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              <a href="/Resume_Akshay_Pratap_Singh.pdf" download="Resume_Akshay_Pratap_Singh.pdf">
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials  */}
            <Socials
              containerStyles="flex gap-x-6 m-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image  */}
          <div className="hidden xl:flex relative">
            {/* badge  */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={5}
              badgeText="+ Years Of Learning"
            />
            {/* badge 2  */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={10}
              // endCountText={'k'}
              badgeText="+ Finished Projects"
            />
            {/* badge 3  */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={275}
              // endCountText={'k'}
              badgeText="+ Active Commits"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2  "></div>
            <DevImg
              containerStyles="bg-hero_shape w-[530px] h-[460px] bg-no-repeat relative bg-bottom flex items-center justify-center mr-10"
              imgSrc="/hero/dev1.png"
            />
          </div>
        </div>
        {/* icon   */}
        <div className="hidden md:flex absolute left-2/4 botton-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
