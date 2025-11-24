  import { Button } from "@/components/ui/button";
  import { ArrowRight } from "lucide-react";

  export const Hero = () => {
    const scrollToAbout = () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-0"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Ethiopian coffee highlands with women farmers"
            className="w-full h-full object-cover scale-110 brightness-[1.15] saturate-125"
          />

          {/* Soft cinematic vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-5xl w-full flex mt-10 md:flex-row items-center md:items-start gap-12 animate-fade-in">
          {/* Left Text Block */}

          <div className="backdrop-blur-xl bg-black/40 p-10 rounded-3xl shadow-2xl border border-white/30 max-w-xl">
            <p
              className="text-xl md:text-2xl mb-6 text-white/95 leading-snug drop-shadow animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              Empowering Young Women in Ethiopian Coffee Communities
            </p>

            <p
              className="text-white/90 text-base md:text-lg leading-relaxed mb-10 animate-fade-in drop-shadow"
              style={{ animationDelay: "0.3s" }}
            >
              Transforming lives through solar-powered coffee innovation—creating sustainable income
              opportunities for young women smallholder farmers in Ethiopia’s highlands.
            </p>

            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-white text-black font-semibold text-lg px-10 py-6 rounded-full shadow-xl animate-fade-in hover:scale-105 transition-transform"
              style={{ animationDelay: "0.45s" }}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

        
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/80 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-4 bg-white rounded-full" />
          </div>
        </div>
      </section>
    );
  };
