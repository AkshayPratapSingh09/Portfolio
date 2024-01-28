//Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import YourComponent from "@/components/Trial";

export default function Home() {
  return (
    <main>
       
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      {/* <YourComponent/> */}
      <Cta />
      
    </main>
  );
}
