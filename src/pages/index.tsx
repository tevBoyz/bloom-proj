import { BloomNav } from "@/components/BloomNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { BloomUnit } from "@/components/BloomUnit";
import { Teams } from "@/components/Teams";
import { Impact } from "@/components/Impact";
import { PCW } from "@/components/PCW";
import { Story } from "@/components/Story";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BloomNav />
      <Hero />
      <About />
      <Mission />
      <BloomUnit />
      <Teams />
      <Impact />
      <PCW />
      <Story />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
